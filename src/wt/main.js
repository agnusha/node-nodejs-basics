import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'url';

const performCalculations = async () => {
    // Write your code here

    const numberOfWorkers = cpus().length;
    const file = join(dirname(fileURLToPath(import.meta.url)), 'worker.js');

    const promises = []
    for (let i = 0; i < numberOfWorkers; i++) {
        promises.push(new Promise((resolve, reject) => {
            const worker = new Worker(file, { workerData: i + 10 })
            worker.on('message', (message) => {
                resolve({ status: 'resolved', data: message });
            });

            worker.on('error', () => {
                reject({ status: 'error', data: null });
            });
        }))
    }

    const result = await Promise.allSettled(promises)
    console.log(result.map(el => el.value))
};

await performCalculations();