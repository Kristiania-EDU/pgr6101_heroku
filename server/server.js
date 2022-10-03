import express from "express";
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.json({
        username: 'Hello'
    });
});

app.post('/login', (req, res) => {
   res.send(401);
});

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Server started at: ', server.address());
});
