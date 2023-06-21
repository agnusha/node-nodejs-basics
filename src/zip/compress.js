import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const compress = async () => {
    // Write your code here 

    const folder = join(dirname(fileURLToPath(import.meta.url)), 'files');
    const fileSource = join(folder, 'fileToCompress.txt');
    const fileDestination = join(folder, 'archive.gz');

    const source = createReadStream(fileSource);
    const destination = createWriteStream(fileDestination);
    const gunzip = createGzip();

    await pipeline(source, gunzip, destination);
};

await compress();