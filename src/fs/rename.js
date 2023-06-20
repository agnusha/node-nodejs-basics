import { dirname, join } from 'node:path';
import { isExists } from './helper.js';
import { rename as renameFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const rename = async () => {
    // Write your code here 
    const folder = dirname(fileURLToPath(import.meta.url))
    const file = join(folder, 'files', 'wrongFilename.txt');
    const newFile = join(folder, 'files', 'properFilename.md');

    try {
        if (!await isExists(file)) {
            throw new Error('FS operation failed');
        }
        if (await isExists(newFile)) {
            throw new Error('FS operation failed');
        }
        await renameFile(file, newFile);

    } catch (error) {
        console.error(`File renaming operation failed: ${error.message}`);
    }

};

await rename();

// implement function that renames file wrongFilename.txt 
// to properFilename with extension.md(if there's no file wrongFilename.txt 
// or properFilename.md already exists Error with message FS operation failed must be thrown)