import { dirname, join } from 'node:path';
import { stdin } from 'node:process';
import { createWriteStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';

const write = async () => {
    // Write your code here 
    const file = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToWrite.txt')

    const writableStream = createWriteStream(file, 'utf8');
    await pipeline(stdin, writableStream);
};

await write();