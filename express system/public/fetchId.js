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
app.get('/post/:id', (req,res) => {
    const id =parseInt(req.params.id);
   res.json(post.filter((post) => post.id === id));
});
app.listen(3000,() => {
  console.log('server : 3000');
});