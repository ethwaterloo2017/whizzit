pragma solidity ^0.4.2;

contract Bounties {
  mapping(address => uint) public user_address_to_question;
  mapping(uint => address) public q_to_expert_address;
  mapping(uint => uint) public q_to_price;
  mapping(address => uint) public pending_withdrawal;
  uint question_id = 0;

  function releaseMilestone(uint installment) {
    require(installment <= q_to_price[user_address_to_question[msg.sender]]);
    uint q_id = user_address_to_question[msg.sender];
    q_to_price[q_id] -= installment;
    pending_withdrawal[q_to_expert_address[q_id]] += installment;
  }

  function addQuestion() payable returns(uint) {
    user_address_to_question[msg.sender] = question_id;
    q_to_price[question_id] = msg.value;
    uint q_id = question_id;
    question_id++;
    return q_id;
  }

  function answer(uint q_id) {
    require(q_to_expert_address[q_id] == 0);
    q_to_expert_address[q_id] = msg.sender;
  }

  function withdraw() {
    require(pending_withdrawal[msg.sender] > 0);
    var amount = pending_withdrawal[msg.sender];
    pending_withdrawal[msg.sender] = 0;
    msg.sender.transfer(amount);
  }
}
