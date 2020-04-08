const express = require('express');
const app = (module.exports = express());
const server = require('./server');
const db = require('./db');

async function main() {
    try {
        await db.connect();
    } catch (e) {
        throw e;
    }

    server.run();
}

main();

module.exports = app;