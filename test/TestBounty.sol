pragma solidity ^0.4.11;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Bounties.sol";

contract TestBounties {
  Bounties b = Bounties(DeployedAddresses.Bounties());

  function testContructBounty() {
    Assert.equal(b.question_id,0,"checks constructor");
  }
}
