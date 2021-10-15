const Web3 = require('web3');
const ab_quiz = require('./build/contracts/ab_quiz.json');
const bytes32 = require('bytes32');
const init = async (accounts) => {
    const contractAddress = "0x09815a01e5924D009d0147d072A06664734bD295";
    const PlayerAddress = "0xC4C5c605CF7E224E6fA52Af3e160B5304B8ae6c9";
    const ownerAddress = "0xCa4c7091d1C4B164fF77a304cfCAe32D392cAEC1";
    const provider = await new Web3.providers.HttpProvider(
        "http://127.0.0.1:7545"
    )
    const web3 = await new Web3(provider);
    const contract = await new web3.eth.Contract(
        ab_quiz.abi,
        contractAddress
    );
    try{
        //await web3.eth.sendTransaction({from: ownerAddress, to:contractAddress, value:web3.utils.toWei('15','ether') });
        // await contract.methods.Start("A farmer has 17 sheep and all but nine die. How many are left?", "ninE")
        // .send({from:"0xCa4c7091d1C4B164fF77a304cfCAe32D392cAEC1", gas: 200000})

        ///////////
        // await contract.methods.New("whatever", bytes32("whatever"))
        // .send({from:ownerAddress, gas: 200000})

       // const question = await contract.methods.question().call();
        await contract.methods.Try("ninE")
        .send({from:PlayerAddress,
         value: web3.utils.toWei("1.1","ether") }
        ) 
        //console.log(question);
    }
    catch(e) {
        console.log(e);
    }
    const quizBalance = await web3.eth.getBalance(contractAddress);
    const playerBalance = await web3.eth.getBalance(PlayerAddress);
    console.log(quizBalance, playerBalance);
}
init()
