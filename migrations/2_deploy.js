const ab_quiz = artifacts.require("ab_quiz");
const bytes32 = require('bytes32');

module.exports = async (deployer, accounts) => {
  const addressByte = bytes32(accounts[0])
  await deployer.deploy(ab_quiz,[addressByte]);
};
