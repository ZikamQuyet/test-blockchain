import React, { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useInterval } from "react-use";

const Countdown: React.FC<any> = ({
  times,
  mx,
  color = "white",
  title,
  dotSize,
  backupTime,
  ...rest
}: any) => {
  const { t } = useTranslation(["governance"]);
  const calculateTime = () => {
    // @ts-ignore
    const time = Date.parse(times) - Date.parse(new Date());
    // @ts-ignore
    const nextTime = Date.parse(backupTime) - Date.parse(new Date());
    const timeSelect = backupTime && time < 0 ? nextTime : time;
    const seconds = Math.floor((timeSelect / 1000) % 60);
    const minutes = Math.floor((timeSelect / 1000 / 60) % 60);
    const hours = Math.floor((timeSelect / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeSelect / (1000 * 60 * 60 * 24));
    return { days, hours, minutes, seconds };
  };
  const [timeObj, setTime] = useState(calculateTime());
  const getTimeUntil = () => {
    setTime(calculateTime());
  };
  useInterval(() => {
    getTimeUntil();
  }, 1000);
  const formatTime = (n: number) => (n > 9 ? n : `0${n}`);
  return (
    <Flex
      align="center"
      fontSize={["14px", "14px", "16px", "16px", "16px", "16px"]}
      fontWeight="semibold"
      color={color}
      zIndex={10}
    >
      <Flex d={Number(timeObj?.days) > 0 ? "block" : "none"} {...rest}>
        {timeObj.days > 0 ? formatTime(timeObj?.days) : "00"}
      </Flex>
      <Flex
        // d={Number(timeObj?.days) > 0 ? "block" : "none"}
        mx={mx}
        fontSize={dotSize}
      >
        :
      </Flex>
      <Flex d={Number(timeObj?.hours) >= 0 ? "flex" : "none"} {...rest}>
        {timeObj.hours > 0 ? formatTime(timeObj?.hours) : "00"}
      </Flex>
      <Flex
        // d={Number(timeObj?.hours) >= 0 ? "flex" : "none"}
        mx={mx}
        fontSize={dotSize}
      >
        {title ? <Text px="4px">{t("Hours")}</Text> : ":"}
      </Flex>
      <Flex {...rest}>
        {timeObj.minutes > 0 ? formatTime(timeObj?.minutes) : "00"}
      </Flex>
      {title ? (
        <Flex pl="4px">
          {" "}
          <Text>{t("Minutes")}</Text>{" "}
        </Flex>
      ) : (
        <Flex mx={mx} fontSize={dotSize}>
          :
        </Flex>
      )}
      <Flex display={title ? "none" : "flex"} {...rest}>
        {timeObj.seconds > 0 ? formatTime(timeObj?.seconds) : "00"}
      </Flex>
    </Flex>
  );
};

export default Countdown;
