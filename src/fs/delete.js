import { dirname, join } from 'node:path';
import { isExists } from './helper.js';
import { unlink } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const remove = async () => {
    // Write your code here 
    const folder = dirname(fileURLToPath(import.meta.url))
    const file = join(folder, 'files', 'fileToRemove.txt');

    try {
        if (!await isExists(file)) {
            throw new Error('FS operation failed');
        }
        await unlink(file);

    } catch (error) {
        console.error(`File deletion operation failed: ${error.message}`);
    }
};

await remove();