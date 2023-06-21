import { dirname, join } from 'node:path';
import { stdout } from 'node:process';
import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'node:url';

const read = async () => {
    const file = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToRead.txt')

    const readableStream = createReadStream(file, 'utf8');
    readableStream.pipe(stdout);
};

await read();