import { dirname, join } from 'node:path';
import { isExists } from './helper.js';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const read = async () => {
    // Write your code here 
    const folder = dirname(fileURLToPath(import.meta.url))
    const file = join(folder, 'files', 'fileToRead.txt');

    try {
        if (!await isExists(file)) {
            throw new Error('FS operation failed');
        }
        const fileContent = await readFile(file, 'utf-8');
        console.log(fileContent);

    } catch (error) {
        console.error(`File reading operation failed: ${error.message}`);
    }

};

await read();