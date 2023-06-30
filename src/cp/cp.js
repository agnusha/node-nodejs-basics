import { dirname, join } from 'node:path';
import { fork } from "child_process";
import { fileURLToPath } from 'node:url';

const spawnChildProcess = async (args) => {
    const folder = dirname(fileURLToPath(import.meta.url))
    const file = join(folder, "files", "script.js");
    fork(file, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['sadsdsa', 'wedewdew', 'arg3', 'arg4']);