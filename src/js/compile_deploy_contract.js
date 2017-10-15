// var fs = require('fs');
// var web3 = require('web3');
// var solc = require('solc');

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var myContract;
var myContractInstance;

// web3.eth.getAccounts().then(function(accounts){
    // var helloWorldContract = fs.readFileSync("../../../contracts/Bounties.sol", "utf-8");
    // var compiledCode = solc.compile(helloWorldContract);
    // var abiInterface = compiledCode.contracts[":Bounties"].interface;
    // var byteCode = compiledCode.contracts[":Bounties"].bytecode;
    // myContract = new web3.eth.Contract(JSON.parse(abiInterface));
    // myContract.deploy({
    //     data: "0x" + byteCode
    // }).send({
    //     from: accounts[0],
    //     gas: 21000,
    //     gasPrice: 50000000000
    // }).then(function(inst){
    //     console.log(inst);
    // });
var abi= [{"constant":false,"inputs":[{"name":"q_id","type":"uint256"}],"name":"answer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"installment","type":"uint256"}],"name":"releaseMilestone","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"pending_withdrawal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"q_to_price","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"question_id","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"user_address_to_question","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"addQuestion","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"q_to_expert_address","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}];

myContract = web3.eth.contract(abi);
myContractInstance = myContract.at('0x6636b9551a8fed64944f34315c4666a8d6152566');
// })

function addQuestion() {
    console.log(myContractInstance)
    // console.log(myContractInstance.question_id.call())
    myContractInstance.addQuestion({from:web3.eth.accounts[0],value:100000000,gas:100000});
}

function answer(id) {
    myContractInstance.answer.sendTransaction(id, (err,res)=>console.log(res));
}
