import { dirname, join } from 'node:path';
import { cp } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const copy = async () => {
    // Write your code here 

    const folder = dirname(fileURLToPath(import.meta.url))
    const fileSource = join(folder, 'files');
    const fileDestination = join(folder, 'files_copy');

    try {
        await cp(fileSource, fileDestination, { recursive: true })

    } catch (error) {
        console.error(`File copy operation failed: ${error.message}`);
    }

};

await copy();
