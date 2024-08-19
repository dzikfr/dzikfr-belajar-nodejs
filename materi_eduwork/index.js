const {halo, world} = require('./module/index');

const http = require('http');

const moment = require('moment');

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/json');
//     // res.setHeader('Content-Type', 'text/plain');
//     // res.write('<h1>hello from kode http</h1>');
//     res.write(JSON.stringify({
//         status: 'sucsess',
//         message: 'selamat datang',
//         testing: 'ok',
//         loginAt: moment()
//     }))
//     res.end();
// });

const server = http.createServer((req, res) => {
    switch(req.url){
        case '/welcome' : welcome(res); break;
        case '/' : home(res); break;
        default: page404(res); break;
    }
});

const welcome = res =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json');
    res.write(JSON.stringify({
        status: 'sucsess',
        message: 'selamat datang',
        loginAt: moment()
    }))
    res.end();
}

const home = res => {
    res.end('<h1>Home Page</h1>');
}

const page404 = res => {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/json');
    res.write(JSON.stringify({
        status: 'failed',
        message: 'gagal mendapatkan halaman',
        loginAt: moment()
    }))
    res.end();
}

server.listen(3000, () => console.log('Server running at http://127.0.0.1:3000'));