const http = require('http');
const app = require('./app');
const cors = require('cors');

app.use(cors())


const port = process.env.PORT || 3333;

const server = http.createServer(app);

server.listen(port);