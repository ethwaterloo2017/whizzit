pragma solidity ^0.4.2;

contract questions {
  mapping(uint => address) public q_to_address;
  mapping(uint => uint) public q_to_price;
  mapping(address => uint) public pending_withdrawal;


  modifier restricted(uint question_id) {
    if (msg.sender == q_to_address[question_id]) _;
  }

  function releaseMilestone(uint question_id, address destination, uint installment) restricted(question_id) {
    require(msg.value <= q_to_price[question_id]);
    q_to_price[question_id] -= installment;
    pending_withdrawal[destination] += installment;
  }

  function addQuestion(uint question_id) payable {
    require(q_to_address[question_id] == 0))
    q_to_address[question_id] = msg.sender;
    q_to_price[question_id] = msg.value;
  }

  function withdraw() {
    require(pending_withdrawal[msg.sender] > 0);
    var amount = pending_withdrawal[msg.sender];
    pending_withdrawal[msg.sender] = 0;
    msg.sender.transfer(amount);
  }
}
