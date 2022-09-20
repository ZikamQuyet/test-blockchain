import BigNumber from "bignumber.js";
export const getBalanceNumber = (
  balance: BigNumber | number,
  decimals = 18,
  suffix = 4
) => {
  const displayBalance = new BigNumber(balance).dividedBy(
    new BigNumber(10).pow(decimals)
  );
  const fixedBalance = displayBalance.toFixed(suffix, BigNumber.ROUND_DOWN);
  return Number(fixedBalance || 0);
};
