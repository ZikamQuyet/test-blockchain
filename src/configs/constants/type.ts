export const enum BondAction {
  PURCHASE = "purchase",
  DETAIL = "detail",
  CLAIM = "claim",
  COMMIT = "commit",
}
export const enum BondStatus {
  ON_SALE = "on_sale",
  ACTIVE = "active",
  PENDING = "pending",
  COMMIT = "commit",
  DISTRIBUTION = "distribution",
  MATURED = "matured",
  CALCULATION = "calculation",
}
export interface IBondDetail {
  bond_name: string;
  stake_apr: number;
  est_apr: string;
  ytm: number;
  maturity_date?: string;
  last_price: number;
  face_value: number;
  supply: number;
  status: BondStatus;
  action: BondAction;
  status_end_time?: string;
  status_start_time?: string;
  face_asset?: {
    address: string;
    symbol: string;
  };
  underlying_asset: {
    address: string;
    symbol: string;
  };
  pending_date?: number;
  on_sale_date?: number;
  active_date?: number;
  matured_date?: number;
  name?: string;
  symbol?: string;
  id?: any;
  totalStake?: any;
  posiPerBlock?: any;
  type: "normal" | "sale-commit" | "launchpad";
  committed_time?: number;
  distributed_time?: number;
  calculated_date?: number;
}
