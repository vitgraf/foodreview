import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const login = express.Router();


login.post('/', async (req, res) => {

    // recebe as informacoes de login
    const {email, password} = req.body;   

    // buscar o EMAIL no banco de dados, se existente, e armazenar
    const registeredUser = await User.findOne(
        {where: {email}}
    ).catch(
        (err)=>{
            console.log("error: ", err);
        }
    )


    // caso EMAIL inexistente, informar o usuário
    if (!registeredUser)     {
        return res
            .status(400)
            .json({message: "Email ou Senha inválidos."})

    }
    
    // caso EMAIL existente, verificar a SENHA do usuário
    if (!bcrypt.compareSync(password, registeredUser.password)){
        return res  
        .status(400)
        .json({message: "Email ou Senha inválidos."})
    }

    // caso SENHA correta, gerar TOKEN de acesso
    const token = jwt.sign(
        // Payload: o que será armazenado no TOKEN
        {
            id: registeredUser.id,
            name: registeredUser.name,
            admin: registeredUser.admin
        },
        process.env.JWT_SECRET, 
        // options
        {
            expiresIn: '1h'
        }
    );

    // enviar confirmacao de LOGIN e TOKEN para uso.
    res.json(
        {
            message: "Bem-vindo",
            token: token
        }
    )




});

export default login; 


// 1) colher e reservar as informacoes importadas da requisicao (req)


// 2) verificar se o usuario existe. se existir ,ok . se nao existir devolver a msg "email ou senha invalidos"

// 3) comparar as senhas (bcrypt), senha incorreta - msg de erro. senha correta - msg de boas vindas

// 4) pesquisar JWT (json web token), usar para criar um token de acesso