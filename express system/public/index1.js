const express = require('express');

const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname,'public')));
// app.get('/user', (req,res) => {
//     res.sendFile(path.join(__dirname, 'public','index.html'));
// });
// app.get('/about', (req,res) => {
//     res.sendFile(path.join(__dirname, 'public','about.html'));
// });
// app.get('/service', (req,res) => {
//     res.send('<h1>hello this my name my service </h1>');
// });
app.listen(3000, () => {
   console.log('server runnig on this : 3000/');
}); 