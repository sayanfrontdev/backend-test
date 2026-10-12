require('dotenv').config()

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/twitter', (req, res) => {
    res.send('Hello World from twitter!');
});
app.get('/login', (req, rs)=> {
    res.send("<h1>Please login here</h1>")
})

app.get('/youtube', (req, res)=> {
    res.send("<h2>Youtube link is here</h2>")
})

app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${port}`);
});