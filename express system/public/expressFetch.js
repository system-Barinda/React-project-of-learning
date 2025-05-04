const express = require('express');
const app = express();

let post = [
    {id: 1,name:'barinda',location:'muhanga'},
    {id: 2,name:'sandrine',location:'Huye'},
    {id: 3,name:'aderine',location:'kigali'},
    {id: 4,name:'christine',location:'kigali'},
    {id: 5,name:'mardoshe',location:'kigali'},
    {id: 6,name:'kelly',location:'kigali'},
    {id: 7,name:'ange',location:'kigali'},
    {id: 8,name:'shami',location:'kigali'},
];
app.get('/Api/post', (req,res) => {
   const name = post.map( user => user.name);
     res.json(name);
});

app.listen(3000,() => {
console.log(' server : 3000');
});