const express = require('express');
const cokkieParser = require('cookie-parser');

const app = express();
app.use(cokkieParser());
app.get('/admin',(req,res)=>{
    res.cookie('name','ujjwal',{maxAge: 10000, httpOnly: true});
    res.send('logged in');
});

app.get('/user',(req,res)=>{
    console.log(req.cookies);
    res.send(`user= ${req.cookies.name}`);
});

app.listen(3000,()=>{
    console.log('server is running on port 3000');
});
