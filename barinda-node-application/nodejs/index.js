import http from 'http';
const port = 8000;
const server = http.createServer((req,res) => {
    res.setHeader('content-type' , 'text/plain');
    res.statusCode = 200;
  res.end('<h1>hello world my name hhhhhhh is barinda</h1>');
 
});
server.listen(port, () => {
console.log(`your running server is : ${port}`);
});