import { dirname, join } from 'node:path';
import { cp } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { isExists } from './helper.js';

const copy = async () => {
    // Write your code here 

    const folder = dirname(fileURLToPath(import.meta.url))
    const fileSource = join(folder, 'files');
    const fileDestination = join(folder, 'files_copy');

    try {

        if (!await isExists(fileSource)) {
            throw new Error('FS operation failed');
        }

        if (await isExists(fileDestination)) {
            throw new Error('FS operation failed');
        }

        await cp(fileSource, fileDestination, { recursive: true })

    } catch (error) {
        console.error(`File copy operation failed: ${error.message}`);
    }

};

await copy();
