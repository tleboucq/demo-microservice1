const express = require('express');
const app = express();
const port = 80;
app.get('microservice2', (req, res) => {
    res.send('<h1>microservice1!</h1>');
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});