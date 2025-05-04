const {createServer, get} = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;

const users = [
    {id:1,name:"system barida",location:"muhanga"},
    {id:2,name:"cyubahiro",location:"huye"},
    {id:3,name:"Gambira",location:"Nyamagabe"},
    {id:4,name:"ishimwe",location:"Nyanza"},
    {id:5,name:"iradukunda",location:"muhanga"},
    {id:6,name:"irakoze eric",location:"Kamonyi"},
    {id:7,name:"Byishimo aime",location:"Nyagatare"},
    {id:8,name:"nshimiyumuremyi legis",location:"Rubavu"},
    {id:9,name:"niyokwizerwa oscar",location:"Burera"},
    {id:10,name:"imenyi alexandre",location:"kigali"}
];
const database = createServer((req,res) => {
  
    res.setHeader('content-type','application/json');
    res.end(JSON.stringify(users))

    if(req.method === 'GET' && req.url === '/users')
    {
        res.statusCode = 200;
      res.end(JSON.stringify({ Message : 'welcome to my API '}));  
    }
    else if(req.method === 'GET' && req.url === "/")
    {
        res.statusCode = 200;
        res.end(JSON.stringify({ message : 'welcome in empty space API'}));

    }
    else 
    {
        res.statusCode = 404;
        res.end(JSON.stringify({ message : " api are not found "}));
    }
});

database.listen(port, hostname, () => {
   console.log(`your server is http://${hostname}:${port}/`);
});