const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPrimise = require('fs').promises;
const Emitter = require('events');

const logEvent = require('./Emitter');
class LoginEmitter extends Emitter { };
const login = new LoginEmitter();

login.on('log', (msg,fileName) => logEvent(msg,fileName));

const Port = process.env.Port || 3500;

const serverFile = async (pathFile, contentType, response) => {
    try {
        const data = await fsPrimise.readFile(pathFile, 'utf8');
        response.writeHead(200, { 'Content-Type': contentType });
        response.end(data);
    } catch (err) {
        console.log(err);
        login.emit('log', `${err.name}\t${err.message}`, 'error.txt');
        response.statusCode = 500;
        response.end();
    }
}

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    login.emit('log', `${req.url}\t${req.method}`, 'Login.txt');


    const extension = path.extname(req.url);
    let contentType;

    switch (extension) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.txt':
            contentType = 'text/plain';
            break;
        default:
            contentType = 'text/html';
    }
    let pathFile =
        contentType === 'text/html' && req.url === '/'
            ? path.join(__dirname, 'Pages', 'index.html')
            : contentType === 'text/html' && req.url.slice(-1) === '/'
                ? path.join(__dirname, 'Pages', req.url, 'index.html')
                : contentType === 'text/html'
                    ? path.join(__dirname, 'Pages', req.url)
                    : path.join(__dirname, req.url);

    if (!extension && req.url.slice(-1) !== '/') pathFile += '.html';

    const exist = fs.existsSync(pathFile);

    if (exist) {
        serverFile(pathFile, contentType, res);
    } else {
        switch (path.parse(pathFile).base) {
            case 'old-page.html':
                res.writeHead(301, { 'Location': '/new-page.html' });
                res.end();
                break;
            case 'www-page.html':
                res.writeHead(301, { 'Location': '/' });
                res.end();
                break;
            default:
                serverFile(path.join(__dirname, 'Pages', '404.html'), 'text/html', res);
        }
    }
});

server.listen(Port, () => console.log(`Server Running on port ${Port}`));
