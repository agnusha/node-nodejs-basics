const parseEnv = () => {
    // Write your code here 
    const vars = Object.entries(process.env)
        .filter(([name]) => name.startsWith('RSS_'))
        .map(([name, value]) => `${name}=${value}`)
        .join('; ');

    console.log(vars);
};

parseEnv();