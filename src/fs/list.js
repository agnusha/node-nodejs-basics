import { dirname, join } from 'node:path';
import { readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { isExists } from './helper.js';


const list = async () => {
    // Write your code here 
    const folder = join(dirname(fileURLToPath(import.meta.url)), 'files');

    try {
        if (!await isExists(folder)) {
            throw new Error('FS operation failed');
        }

        const files = await readdir(folder);
        files.forEach((fileName) => console.log(fileName));

    } catch (error) {
        console.error(`File list operation failed: ${error.message}`);
    }
};

await list();