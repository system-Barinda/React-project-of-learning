import {createServer} from 'http'
const PORT = process.env.PORT

const notes =[
    {id:1 ,name :'programming',content:'programming notes', createdAt:''},
    {id:2 ,name :'web development', content:'web development notes',createdAt:''},
    {id:3 ,name :'algorthim',content:'algorithm  notes',createdAt:''},


]
const server = createServer((req,res) =>{
    if(req.url === '/api/notes' && req.method === 'GET'){
        res.setHeader('content-type','application/json')
        res.write(JSON.stringify(notes))
        res.end()
    }
    else if (req.url.match(//api/notes/([0-9]+)/) && req.method === 'GET') {
        res.setHeader('content-type','application/json')
        res.write(JSON.stringify( {id:1 ,name :'programming',content:'programming notes', createdAt:''}))
        res.end()

    }
    else if(req.url === 'api/notes/add' && req.method === 'POST'){
        // res.write('content-type',)
    }

    else{

        res.setHeader('content-type','application/json')
        res.statusCode = 404
        res.write(JSON.stringify({message:'Router not found'}))
        res.end()
    }

})

server.listen(PORT, () =>{
    console.log(server is running on ${PORT});

})