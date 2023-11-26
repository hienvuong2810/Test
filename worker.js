const { parentPort, workerData } = require('worker_threads');

const count = (n) => {
    let x = 0
    console.log('start');
    for(let i = 0; i< workerData;i++) {
        x++
    }
    console.log('end');

  parentPort.postMessage(x);
}

count(workerData);