import { PathFinder, Network } from "@routerprotocol/asset-transfer-sdk-ts";
import { evmSignerFromPrivateKeyAndRpc } from "@routerprotocol/asset-transfer-sdk-ts/src/pathfinder/ChainClient/EvmChainClient";
import dotenv from "dotenv";
dotenv.config();
const YOUR_WIDGET_ID = "0"; // Replace with your unique SDK ID
const pathfinder = new PathFinder(Network.Testnet, YOUR_WIDGET_ID);

const main = async () => {
  const evmSigner = evmSignerFromPrivateKeyAndRpc(
    process.env.PRIVATE_KEY as string,
    "https://rpc.ankr.com/avalanche_fuji"
  );

  // const quote = await pathfinder.getQuote({
  //   sourceChainId: "43113",
  //   sourceTokenAddress: "0x5425890298aed601595a70AB815c96711a31Bc65",
  //   destinationChainId: "17000",
  //   destinationTokenAddress: "0x5c2c6ab36a6e4e160fb9c529e164b7781f7d255f",
  //   expandedInputAmount: "3000000000000000000",
  // });

  // const transaction = await pathfinder.executeQuote(
  //   {
  //     quote,
  //     slippageTolerance: "1",
  //     senderAddress: evmSigner.address,
  //     receiverAddress: evmSigner.address,
  //   },
  //   {
  //     evmSigner,
  //   }
  // );

  console.log("Transaction hash: ", evmSigner);
};

main();
