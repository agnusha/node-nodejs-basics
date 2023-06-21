import { createHash } from 'crypto';
import { dirname, join } from 'node:path';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const calculateHash = async () => {
    // Write your code here 
    const file = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToCalculateHashFor.txt');
    const fileData = await readFile(file);

    const hash = createHash('sha256').update(fileData).digest('hex')
    console.log(hash);
};

await calculateHash();