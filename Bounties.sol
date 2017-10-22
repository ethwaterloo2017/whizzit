pragma solidity ^0.4.2;

contract Bounties {
    
    struct Question {
        address sender;
        address receiver;
        uint bounty;
    }

    mapping(uint => Question) questions;
    mapping(address => uint) pending_withdrawals;
    uint q_id = 0;

    function releaseMilestone(uint amount, uint id) {
        require(amount <= questions[id].bounty && questions[id].sender == msg.sender);
        questions[id].bounty -= amount;
        pending_withdrawals[questions[id].receiver] += amount;
    }

    function addQuestion() payable {
        questions[q_id].sender = msg.sender;
        questions[q_id].bounty = msg.value;
        q_id++;
    }

    function answer(uint id) {
        require(questions[id].receiver == 0 && questions[id].sender != msg.sender);
        questions[id].receiver = msg.sender;
    }

    function withdraw() {
        require(pending_withdrawals[msg.sender] > 0);
        var amount = pending_withdrawals[msg.sender];
        pending_withdrawals[msg.sender] = 0;
        msg.sender.transfer(amount);
    }
}
