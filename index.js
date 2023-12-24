const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/',(req, res) =>{
    res.send('new t-shirt is running')
});

app.get('/shirt', (req, res) =>{
    res.json({price:400})
})

app.listen(port, ()=>{
    console.log(`new t-shirt Api is running on: ${port}`)
})