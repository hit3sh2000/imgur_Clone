const express = require('express');
const db = require('./models/db');
 const app = express();
 const imageRoute = require('./routes/imageroute');

 app.get('/',(req,res)=>{
     res.send('Imgur');
 });
     app.use('/image', imageRoute);

 
 app.listen(8000,()=>{
     console.log('Listening the port no. 8000')
 })