import { Flex, Image, Text, useMediaQuery } from '@chakra-ui/react';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BondStatus } from '../../../configs/constants/type';
import { calculatePercentStatusDatePassed } from '../../../utils/common';
import { getColorByBondStatus } from '../../../utils/propertiesHelper';
import Countdown from './CountDown';

interface IBondStatus {
  status: BondStatus;
  statusEndTime: number;
  statusStartTime: number;
  nextStatus?: any;
  id: any;
}

const BondStatusColumn: React.FC<IBondStatus> = ({ status, statusStartTime, statusEndTime, nextStatus }) => {
  const { t } = useTranslation(['bonds']);
  const [isSmallerThan768] = useMediaQuery('(max-width:768px) and (min-width: 0px )');
  const percentStatusDatePassed = calculatePercentStatusDatePassed(statusStartTime, statusEndTime);
  const timeCountCurrentState = new Date(statusEndTime * 1000);
  const timeCountNextState = new Date(nextStatus?.endTime * 1000);
  const currentTime = moment().unix();
  const countDownToNextStatus = statusEndTime - currentTime;
  const [bonStatus, setBonStatus] = useState(status);
  const color = getColorByBondStatus(bonStatus);
  const isMatured = bonStatus === BondStatus.MATURED;
  useEffect(() => {
    if (countDownToNextStatus < 1000) {
      const timer1 = setTimeout(() => {
        setBonStatus(nextStatus.status);
      }, countDownToNextStatus * 1000);
      return () => {
        clearTimeout(timer1);
      };
    }
  }, [statusEndTime]);
  const renderMaturedStatus = () => {
    return (
      <Flex
        align="center"
        py="4px"
        justify="center"
        bg={isSmallerThan768 ? 'rgba(26, 196, 134, 0.1)' : ''}
        w="100%"
        borderRadius="8px"
      >
        <Image src={'/img/checked.svg'} w="24px" mr={['6px']} />
        <Text fontSize="12px" color={color}>
          {t(bonStatus)}
        </Text>
      </Flex>
    );
  };
  return (
    <Flex flexDirection="column" align="center" h="100%" justify="space-between" w="100%">
      {!isMatured && (
        <>
          <Flex w="100%" justify="space-between">
            <Text fontSize={isSmallerThan768 ? '12px' : '14px'} color={color} textAlign="start">
              {t(bonStatus)}
            </Text>
            <Flex w="68px" justifyContent="flex-end">
              <Countdown times={timeCountCurrentState} fontSize="10px" dotSize="10px" backupTime={timeCountNextState} />
            </Flex>
          </Flex>
          <Flex bg="gray.600" w="100%" h="4px" borderRadius="4px" mt="6px">
            <Flex bg={color} w={`${percentStatusDatePassed}%`} h="4px" borderRadius="4px"></Flex>
          </Flex>
        </>
      )}
      {isMatured && renderMaturedStatus()}
    </Flex>
  );
};

export default BondStatusColumn;
