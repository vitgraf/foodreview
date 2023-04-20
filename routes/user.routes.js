import express from 'express';

const user = express.Router();


user.get('/', (req,res) => res.send ("Rota de Usuario"));
user.get('/register', (req,res) => res.send ("Cadastro de novo usuario"));

export default user; 

