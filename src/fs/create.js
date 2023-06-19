import path from 'node:path';
import { access, writeFile, constants } from 'node:fs/promises';
import { fileURLToPath } from 'url';

const create = async () => {
    // Write your code here 
    const folder = path.dirname(fileURLToPath(import.meta.url))
    const file = path.join(folder, 'files', 'fresh.txt');

    try {
        if (await fileExists(file)) {
            throw new Error('FS operation failed');
        }
        await writeFile(file, 'I am fresh and young');
    } catch (error) {
        throw new Error(`File creation operation failed: ${error.message}`);
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