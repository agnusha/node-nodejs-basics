const parseArgs = () => {
    // Write your code here 
    const args = process.argv.slice(2);

    for (let i = 0; i < args.length; i += 2) {
        const name = args[i].slice(2);
        const value = args[i + 1];
        console.log(`${name} is ${value}`);
    }
};

parseArgs();