const user = () => {
    const list  = [
        { id:1,name:"barinda", location:"muhanga" },
        { id:2,name:"adorente", location:"Nyanza" },
        { id:3,name:"sandrine", location:"Rubavu" }
    ];
    list.map((user) => {
       return user;
    });
   
};

const BarindaHttps = require('http');

const getBarinda = BarindaHttps.createServer((req, request) => {
    request.writeHead(200, {'content-type' : 'text/plain'});

    const list  = [
        { id:1,name:"barinda", location:"muhanga" },
        { id:2,name:"adorente", location:"Nyanza" },
        { id:3,name:"sandrine", location:"Rubavu" }
    ];

    request.end('list');
});

getBarinda.listen(5000, () => {
    console.log('your are running at this locahost  http://localhost:5000/');
});


