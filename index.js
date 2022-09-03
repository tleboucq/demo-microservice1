const express = require('express');
const app = express();
const port = 80;

app.get('/microservice1', (req, res) => {
    console.log(req.url);
    res.send('<h1>microservice1!</h1>');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});