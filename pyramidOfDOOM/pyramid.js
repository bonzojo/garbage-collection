const introspect = require('./pyramidScheme');

async function introspective() {
    const thoughts = await introspect();
    console.log(thoughts);
}

introspective();