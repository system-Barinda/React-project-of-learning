
const http = require('http'); 

const hostname = 'localhost'; 
const port = 3000; 


const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 }
];


const server = http.createServer((req, res) => {
  
  res.setHeader('Content-Type', 'application/json');

  
  if (req.method === 'GET' && req.url === '/users') {
  
    res.statusCode = 200; 
    res.end(JSON.stringify(users)); 
  } else if (req.method === 'GET' && req.url === '/') {
    
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Welcome to the API!' }));
  } else {
  
    res.statusCode = 404; 
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/users`);
});
