const http = require('http');

let notes = [];
let currentId = 1;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({notes}));

    if(req.method === 'GET' && req.url === '/notes')
        {
            res.statusCode = 200;
            res.end(JSON.stringify({ Message : 'welcome to my memory '}));  
        }
        else if (req.method === 'POST') {
        
            const { title, content } = body;
            if (title && content) {
                const newNote = {
                    id: currentId++, 
                    title,
                    content,
                    
                };}

}
});
    
server.listen(3000, () => {
    console.log('Server running on http://localhost:3000/');
});
