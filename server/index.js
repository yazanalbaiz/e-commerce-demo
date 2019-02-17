const app = (require('express'))();
const pino = require('express-pino-logger')();

const data = require('./data/data.json');

const port = 3001;

app.use(pino);

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
});

app.listen(port, () => console.log(`API Running on port ${port}`));