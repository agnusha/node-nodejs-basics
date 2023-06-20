import { dirname, join } from 'node:path';
import { access, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const create = async () => {
    // Write your code here 
    const folder = dirname(fileURLToPath(import.meta.url))
    const file = join(folder, 'files', 'fresh.txt');

    try {
        if (await fileExists(file)) {
            throw new Error('FS operation failed');
        }
        await writeFile(file, 'I am fresh and young');
    } catch (error) {
        console.error(`File creation operation failed: ${error.message}`);
    }
};

async function fileExists(file) {
    try {
        await access(file);
        return true;
    } catch {
        return false;
    }
}

await create();