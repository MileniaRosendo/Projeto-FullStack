const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const axios = require('axios');

router.get('/', function (req, res){
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.use('/',router);
app.listen(process.env.port || '3000');

console.log('Servidor Rodando');

// const usuarioData = {
//     nome: 'João',
//     email: 'joao@example.com',
//     senha: '1213123123'
//   };
//   axios.post('http://localhost:8080/api/v1/Usuarios', usuarioData)
//   .then(response => {
//     // Manipule a resposta da solicitação POST
//     console.log('Usuário criado:', response.data);
//   }
  //   // Faz uma solicitação GET para obter todos os usuários
    
  // })
  // .catch(error => {
  //   // Manipule o erro da solicitação POST
  //   console.error('Erro ao criar o usuário:', error);
  // });
  // async function verUsuarios()
  // {
  //   const id = 1;
  //   const response = await axios.get(`http://localhost:8080/api/v1/Usuarios/${id}`);
  //   console.log('Nome do 1° Usuário : ', response.data);
  // }
  // verUsuarios()
//   async function obterDadosUsuario() {
//     async function nomeUsuario() {
//       const id = 1;
//       const response = await axios.get(`http://localhost:8080/api/v1/Usuarios/nomes/${id}`);
//       return response.data;
//     }
//     async function emailUsuario() {
//       const id = 1;
//       const response = await axios.get(`http://localhost:8080/api/v1/Usuarios/emails/${id}`);
//       return response.data;
//     }
    
  
//   try {
//     const nome = await nomeUsuario();
//     const email = await emailUsuario();
//     console.log(nome, ', ', email);
//     // Faça o que você precisa com o resultado aqui
//   } catch (error) {
//     console.error(error);
//     // Lide com o erro de acordo com suas necessidades
//   }
// }

// obterDadosUsuario();
  // axios.get('http://localhost:8080/api/v1/Usuarios/${}')
  //     .then(response => {
  //       // Manipule a resposta da solicitação GET
  //       const nome = response.data;
  //       console.log('Lista de usuários:',nome);
  //     })
  //     .catch(error => {
  //       // Manipule o erro da solicitação GET
  //       console.error('Erro ao obter a lista de usuários:', error);
  //     });