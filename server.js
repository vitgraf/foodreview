// importacao de pacotes necessarios

import express from 'express'; 
import bodyParser from 'body-parser'; 
import router from './routes/routes.js';

// rodar o servidor express 

const server = express();
const port = 3000;

server.listen(port, console.log(`Servidor rodando na porta ${port}...`))

server.use(bodyParser.urlencoded( { extended: true } ));
server.use(bodyParser.json());
server.use(router);
