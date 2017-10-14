var Questions = artifacts.require("./questions.sol");

module.exports = function(deployer) {
  deployer.deploy(Questions);
};
