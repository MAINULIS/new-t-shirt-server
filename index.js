const express = require('express');
const cors = require("cors");

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

const shirtsData = require("./data/data.json");

app.get('/',(req, res) =>{
    res.send('new t-shirt is running')
});

app.get('/allShirts', (req, res) =>{
    res.send(shirtsData)
})

app.listen(port, ()=>{
    console.log(`new t-shirt Api is running on: ${port}`)
})