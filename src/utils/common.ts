import BigNumber from "bignumber.js";
import numeral from "numeral";
import moment from "moment";

export const hexToRgb = (hex: string, a?: string) => {
  const result: any = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return Boolean(a)
    ? `rgb(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
        result[3],
        16
      )}, ${a})`
    : `rgb(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
        result[3],
        16
      )})`;
};
export const formatNumberWithNumeral = (
  val: number | string,
  suffix?: number
) => {
  const stringDefault = "0000000000";
  const numberOfZero = stringDefault.slice(0, suffix ?? 3);
  if (val) {
    const newNumber = Number(val);
    if (newNumber < 0.0001) {
      return new BigNumber(newNumber).toFixed(BigNumber.ROUND_DOWN); //suffix
    } else {
      const newData = new BigNumber(newNumber).toFixed(
        Number(suffix || 3),
        BigNumber.ROUND_DOWN
      );

      return numeral(newData).format(`0,0.${numberOfZero}`);
    }
  } else {
    return "0.000";
  }
};

export const calculatePercentStatusDatePassed = (
  startTime: number,
  endTime: number
): number => {
  const startTimeTimestamp = startTime;
  const endTimeTimestamp = endTime;
  const currentTimestamp = moment().unix();
  const percentPassed =
    (currentTimestamp - startTimeTimestamp) /
    (endTimeTimestamp - startTimeTimestamp);
  if (Number(percentPassed) < 0.02) {
    return 0.02;
  }
  return percentPassed * 100;
};

export const calculateYtm = (
  apr: number,
  faceValue: number,
  currentPrice: number,
  maturity_date: number,
  active_date: any
) => {
  const maturity = (maturity_date - active_date) / 31536000;

  const ytm =
    apr * maturity + ((faceValue - currentPrice) * 100) / currentPrice;
  return ytm;
};

export const serialize = (obj: any, prefix?: any): string => {
  const str = [];
  let p;
  for (p in obj) {
    if (obj.hasOwnProperty(p)) {
      const k = prefix ? `${prefix}[${p}]` : p;

      const v = obj[p];
      str.push(
        v !== null && typeof v === "object"
          ? serialize(v, k)
          : `${encodeURIComponent(k)}=${encodeURIComponent(v)}`
      );
    }
  }
  return str.join("&");
};

export const uniqBy = (arr: any, predicate: any) => {
  const cb = typeof predicate === "function" ? predicate : (o:any) => o[predicate];

  return [
    ...arr
      .reduce((map: any, item: any) => {
        const key = item === null || item === undefined ? item : cb(item);

        map.has(key) || map.set(key, item);

        return map;
      }, new Map())
      .values(),
  ];
};
