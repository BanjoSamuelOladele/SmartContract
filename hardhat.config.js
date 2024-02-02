require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia : {
      url: "https://eth-sepolia.g.alchemy.com/v2/PmUo-jzarhNhh-MPgnUEN0-M4hC9cjV5",
      accounts: ["0xbdbeb45b9dca8fc025668e168edec861d7f71826b552c134a7e3d112129aff55"]
    }
  }
};

