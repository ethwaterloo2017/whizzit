var fs = require('fs');
var web3 = require('web3');
var solc = require('solc');

web3 = new Web3(new Web3.providers.HttpProvider("https://localhost:8545"));

web3.eth.getAccounts().then(function(accounts){
    var helloWorldContract = fs.readFileSync("Bounties.sol", "utf-8");
    var compiledCode = solc.compile(helloWorldContract);
    var abiInterface = compiledCode.contracts[":Bounties"].interface;
    var byteCode = compiledCode.contracts[":Bounties"].bytecode;
    var myContract = new web3.eth.Contract(JSON.parse(abiInterface));
    myContract.deploy({
        data: "0x" + byteCode
    }).send({
        from: 0xCeb845bC53A331a5872b71966acF16d13fAc8D39,
        gas: 21000,
        gasPrice: 50000000000
    }).then(function(inst){
        console.log(inst);
    });
}

