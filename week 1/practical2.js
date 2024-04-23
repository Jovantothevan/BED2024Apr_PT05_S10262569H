const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/',(req,res) =>{
    res.send('This is a GET request at /');
});

app.post('/create',(req,res) =>{
    res.send('This is a POST request at /create');
});

app.PUT('/edit',(req,res) =>{
    res.send('This is a PUT request at /edit');
});

app.delete('/',(req,res) =>{
    res.send('This is a DELETE request at /delete');
});

app.listen(port,() =>{
    console.log(`Server is running on http://localhost:${port}`);
});