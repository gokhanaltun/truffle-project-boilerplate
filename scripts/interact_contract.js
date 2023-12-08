require("dotenv").config({path: "../.env"});
const env = process.env;
const sample_abi = require("../build/contracts/Sample.json");
const { Web3 } = require('web3');


interact = async () => {
    const web3 = new Web3('http://localhost:7545');
    const account = web3.eth.accounts.privateKeyToAccount(env.WALLET_PRIV_DEV);
    const contract = new web3.eth.Contract(sample_abi.abi, env.CONTRACT_ADDRESS_DEV);

    contract.methods.owner().call().then(console.log);

    contract.methods.echo().send({
        from: account.address,
        gas: 1000000
    }).then(console.log);

}

interact();