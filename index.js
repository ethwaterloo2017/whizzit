
var ContractInstance;
function addQuestion() {
    ContractInstance.addQuestion({from: web3.eth.coinbase, value: 1100000000000000000}, function(err,res){
        console.log(res);
    });
}

function answerQuestion(id) {
    ContractInstance.answer(id, {from: web3.eth.coinbase}, function(err, res) {
        console.log(res);
    });
}

function releaseMilestone(amount, id) {
    ContractInstance.releaseMilestone(amount, id,  {from: web3.eth.coinbase}, function(err, res) {
        console.log(res);
    });
}

function withdraw() {
    ContractInstance.withdraw({from: web3.eth.coinbase}, function(err, res) {
        console.log(res);
    });
}

window.addEventListener('load', function() {

    // Check if Web3 has been injected by the browser:
    if (typeof web3 !== 'undefined') {
        //       // You have a web3 browser! Continue below!
        startApp(web3);
    } else {
        //                  // Warn the user that they need to get a web3 browser
        //                       // Or install MetaMask, maybe with a nice graphic
        console.log('No web3? You should consider trying MetaMask!')
            // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
            window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
    //
})

function startApp(web3) {
    web3.eth.defaultAccount = web3.eth.accounts[0];
    abi = JSON.parse('[{"constant":false,"inputs":[{"name":"id","type":"uint256"}],"name":"answer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"addQuestion","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"id","type":"uint256"}],"name":"releaseMilestone","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]');
    contract = web3.eth.contract(abi);
    ContractInstance = contract.at('0x95eba257cf6df0560cc53ca67b3a888dc35845f4');

}