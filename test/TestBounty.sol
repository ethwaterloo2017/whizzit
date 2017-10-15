pragma solidity ^0.4.11;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Bounties.sol";

contract TestBounties {
  Bounties b = Bounties(DeployedAddresses.Bounties());

  function testAddQuestion() {
    uint id = b.addQuestion();
    Assert.equal(id,1,"checks constructor");
  }
}
