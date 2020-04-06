const express = require('express');
const app = (module.exports = express());

const server = require('./server');


async function main(){
    server.run();
}

main();

module.exports = app;