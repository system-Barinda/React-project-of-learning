const server = require('./server');

const port = 8422;

server.listen(port, () => {
    console.log( `HTTPS Server running at https://localhost:${port}`);
});