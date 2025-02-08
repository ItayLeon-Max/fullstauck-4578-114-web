import { createServer } from 'http';
const server = createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
});

server.listen(3001, () => {
    console.log('Server is running on port 3000');
})