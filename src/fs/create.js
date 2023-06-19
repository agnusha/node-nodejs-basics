import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const create = async () => {
    // Write your code here 
  const folder = path.dirname(fileURLToPath(import.meta.url))
  const file = path.join(folder, 'files', 'fresh.txt');

  if (fs.existsSync(file)) {
    throw new Error('File creation operation failed: File already exists.');
  }

  try {
    fs.writeFileSync(file, 'I am fresh and young');
  } catch (error) {
    throw new Error(`File creation operation failed: ${error.message}`);
  }
};

await create();