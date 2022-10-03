import express from "express";

const app = express();

app.listen(3000);

app.get('/', (req, res) => {
    res.sendStatus(200);
});

console.log('Hello Server');