const app = (require('express'))();

const data = require('./data/data.json');

const port = 8000;

app.get('/', (req, res) => res.send(data));

app.listen(port, () => console.log(`API Running on port ${port}`));