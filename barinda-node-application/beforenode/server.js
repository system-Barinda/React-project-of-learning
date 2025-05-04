const https = require ('https');
const fs = require ('fs');

// const option = {
//     key:fs.readFileSync('hey.pem'),
//     cert: fs.readFileSync('cert.pem')

// };
const server = https.createServer( (req,res) =>{
    res.writeHead(200);
    res.end(' hello from https server');
});
module.exports = server;