import { AbiItem } from "web3-utils";
import { Interface } from "@ethersproject/abi";
import { getWeb3NoAccount } from "./web3";
import MultiCallAbi from "../configs/abi/Multicall.json";
import { getMulticallAddress } from "./addressHelpers";

export interface Call {
  address: string; // Address of the contract
  name: string; // Function name on the contract (example: balanceOf)
  params?: any[]; // Function params
}
let multiContract: any = null;
const multicall = async (abi: any[], calls: Call[]) => {
  try {
    const web3 = getWeb3NoAccount();
    const multi = new web3.eth.Contract(
      MultiCallAbi as unknown as AbiItem,
      getMulticallAddress()
    );
    if (!multiContract) {
      multiContract = multi;
    }
    const itf = new Interface(abi);
    const calldata = calls.map((call) => [
      call.address.toLowerCase(),
      itf.encodeFunctionData(call.name, call.params),
    ]);
    const { returnData } = await multi.methods.aggregate(calldata).call();
    const res = returnData.map((call: any, i: any) =>
      itf.decodeFunctionResult(calls[i].name, call)
    );
    return res;
  } catch (error) {}
};
export default multicall;
