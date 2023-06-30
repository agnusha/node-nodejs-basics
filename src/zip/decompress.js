import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const decompress = async () => {
    // Write your code here 
    const folder = join(dirname(fileURLToPath(import.meta.url)), 'files');
    const fileSource = join(folder, 'archive.gz');
    const fileDestination = join(folder, 'fileToCompress1.txt');

    const source = createReadStream(fileSource);
    const destination = createWriteStream(fileDestination);
    const gunzip = createGunzip();

    await pipeline(source, gunzip, destination);
};

await decompress();