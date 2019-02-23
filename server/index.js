const app = (require('express'))();
const pino = require('express-pino-logger')();
const cors = require('cors');

const data = require('./data/data.json');

const port = 3001;

app.use(pino);
app.use(cors());

app.get('/', (req, res) => {
    // res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    // res.header('Access-Control-Allow-Headers', 'Content-Type');
    // res.setHeader('Content-Type', 'application/json');
    res.send(data);
});

app.listen(port, () => console.log(`API Running on port ${port}`));