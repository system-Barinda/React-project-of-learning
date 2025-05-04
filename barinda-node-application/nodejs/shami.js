const http = require('http');

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

const server= http.createServer((req,res)=>{
  res.setHeader('Content-type','application/json');
  
  res.end(JSON.stringify(users));

  if(req.method ==='GET' && req.url === '/user'){
    res.statusCode= 200;
    res.end(JSON.stringify({message: "the page exists"}));

  } else if(req.method ==='GET' && req.url === '/'){
    res.statusCode= 200;
    res.end(JSON.stringify({message: "the data is not found"})); 
  }
  else{
    res.statusCode= 404;
    res.end(JSON.stringify({ message: "no thing found"}));
  }
});
 server.listen(3000,'localhost', () => {
 console.log("the web http://localhost:3000/");
 });