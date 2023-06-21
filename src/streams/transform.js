import { Transform } from 'node:stream';
import { stdin, stdout } from 'node:process';


const transform = async () => {
    // Write your code here 
    const reversed = new Transform({
        transform(chunk, _encoding, callback) {
            callback(null, chunk.reverse());
        }
    });

    stdin.pipe(reversed).pipe(stdout);
};

await transform();