
const http = require('http'); 


const arrayValues = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];


const server = http.createServer((req, res) => {
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  
  if (req.url === '/array') {
   
    res.end(arrayValues.join(', ')); 
  } else {
    
    res.statusCode = 404;
    res.end('Page Not Found');
  }
});


server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/array');
});
