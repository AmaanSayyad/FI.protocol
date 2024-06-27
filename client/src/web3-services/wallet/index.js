import {  metisGoerli, scrollSepolia , optimismSepolia  } from "wagmi/chains";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig } from "wagmi";
const { chains, publicClient } = configureChains(
  [ metisGoerli, scrollSepolia,optimismSepolia ],
  [
    jsonRpcProvider({
      rpc: (chainId) => {
        if (chainId.id == 80002) {
          return {
            http: "https://rpc-amoy.polygon.technology",
          };
        } else if (chainId.id == 534351) {
          return {
            http: "https://sepolia-rpc.scroll.io/",
          };
        }
        else if (chainId.id == 599) {
          return {
            http: "https://goerli.gateway.metisdevops.link",
          };
        }
        else if (chainId.id == 11155420) {
          return {
            http: "https://sepolia.optimism.io",
          };
        }
      },
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Feedback Incentivized",
  projectId: "87106bd465234d097b8a51ba585bf799",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export { wagmiConfig, chains };
