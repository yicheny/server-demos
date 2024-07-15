const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('this is maja-express server!');
});

app.post('/mirror', (req, res) => {
    res.json({
        code: 0,
        data: req.body
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
