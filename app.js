const { Worker, isMainThread, parentPort } = require('worker_threads');
const os = require('os');
const CoinKey = require('coinkey');
const crypto = require('crypto');
const readline = require('readline');

function credit(){
  console.log("===========================================================");
  console.log("Bitcoin Vanity address generator")
  console.log("Created by: Corvus Codex");
  console.log("Github: https://github.com/CorvusCodex/");
  console.log("Licence : MIT License");
  console.log("===========================================================");
  console.log("Support my work:");
  console.log("BTC: bc1q7wth254atug2p4v9j3krk9kauc0ehys2u8tgg3");
  console.log("ETH & BNB: 0x68B6D33Ad1A3e0aFaDA60d6ADf8594601BE492F0");
  console.log("Buy me a coffee: https://www.buymeacoffee.com/CorvusCodex");
  console.log("===========================================================");

};

if (isMainThread) {
  let totalCount = 0;
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter the phrase you want to use: ', (phrase) => {
    const numThreads = os.cpus().length;
    let finishedThreads = 0;
    for (let i = 0; i < numThreads; i++) {
      const worker = new Worker(__filename);
      worker.postMessage(phrase);
      worker.on('message', (data) => {
        if (data.address) {
          console.clear();
          credit();
          console.log(`Your vanity address is ${data.address}`);
          console.log(`Your private key is ${data.privateKey}`);
          console.log("If you are satisfied: ");
          console.log("Send a tip to bc1q7wth254atug2p4v9j3krk9kauc0ehys2u8tgg3");
          console.log("Buy me a coffee: https://www.buymeacoffee.com/CorvusCodex");
          console.log("Huge Thanks!");
          console.log("===========================================================");



          process.exit(0);
        } else if (data.count) {
          totalCount += data.count;
          if (totalCount % 100000 === 0) {
            console.clear();
            credit();
            console.log(`Searching... Generated ${totalCount} addresses so far...`);
            console.log("===========================================================");
          }
        } else {
          finishedThreads++;
          if (finishedThreads === numThreads) {
            console.log(`Sorry, no address found containing the phrase "${phrase}"`);
            process.exit(1);
          }
        }
      });
    }
  });
} else {
  parentPort.on('message', (phrase) => {
    let address;
    let keyPair;
    let count = 0;
    while (true) {
      const privateKey = crypto.randomBytes(32);
      keyPair = new CoinKey(privateKey);
      address = keyPair.publicAddress;
      count++;
      if (count % 100000 === 0) {
        parentPort.postMessage({ count });
      }
      if (address.includes(phrase)) {
        parentPort.postMessage({ address, privateKey: keyPair.privateWif });
        return;
      }
    }
  });
}

