
const { Worker } = require('worker_threads');



// (() => {
//     for (let i = 0; i < 3; i++) {
//         let x = 0
//         console.log('start');
//         for (let i = 0; i < 5000000000; i++) {
//             x++
//         }
//         console.log('end')
//         console.log(x);
//     }

// })()


(() => {
    for (let i = 0; i< 3; i++) {
        const worker = new Worker('./worker.js', { workerData: 5000000000 });

        worker.on('message',async (message) => {
            console.log(message);
        });
        worker.on('exit', (code) => {
          if (code !== 0)
            reject(new Error(`stopped with  ${code} exit code`));
        });
    }
})()