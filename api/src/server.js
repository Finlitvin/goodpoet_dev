require('dotenv').config();
const app = require('./');

class Server{
    run(){
        app.listen(process.env.PORT, () => {
            console.log(`Server [+] PORT=${process.env.PORT} `);
        });
    }
}

module.exports = new Server();
