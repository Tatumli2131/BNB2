import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import "hardhat-deploy";

// import "./tasks";
// import "./tasks/functionSignature";
// import "./tasks/storageStructure";

import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
      localhost: 0,
    },
  },
  // Default network when you don't specify "--network {network_name}"
  defaultNetwork: "BNBTestnet",
  networks: {
    hardhat: {},
    localhost: {
      url: "http://localhost:8545",
    },
    goerli: {
      url: "https://goerli.infura.io/v3/" + process.env.INFURA_KEY,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    // BNBTestnet
    BNBTestnet: {
      url: "https://rpc.ankr.com/bsc_testnet_chapel/bf7c0faadac4eacd543a70060e67534620674669ed1c523787e9ea62855ab5ba",
      accounts:["3d04d4fac4d30743695f4cb60e6aea11d557e8e9fc3db164107f347107c6dc4d"]
    }, 
    // Sepolia
    Sepolia: {
      url: "https://sepolia.infura.io/v3/4e6ba152e26149fc9df284b7dcdfe8b8",
      accounts:["794d5f97109ec51e4b7388c6b315bc107282bd25ccdf0592eae71e62af2a0073"]
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
};

export default config;
