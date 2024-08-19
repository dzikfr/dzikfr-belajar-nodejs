const {halo, world} = require('./module/index');

const http = require('http');

const moment = require('moment');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json');
    // res.setHeader('Content-Type', 'text/plain');
    // res.write('<h1>hello from kode http</h1>');
    res.write(JSON.stringify({
        status: 'sucsess',
        message: 'selamat datang',
        loginAt: moment()
    }))
    res.end();
});

server.listen(3000, () => console.log('Server running at http://127.0.0.1:3000'));