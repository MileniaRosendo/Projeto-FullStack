
const axios = require('axios');
async function verUsuarios()
  {
    // let id = 4;
    // for (id; id < 500; id++) {
    //   await axios.delete(`http://localhost:8080/api/v1/Usuarios/${id}`);
      
    //   if (id == 499) {
    //     const response = await axios.get(`http://localhost:8080/api/v1/Usuarios`);
    //     console.log('Usuários : ', response.data);
    //   }
    // }
    
    let a = 
    {
      nome: 'Pimboso',
      email: 'pimboso@gmail.com',
      senha: 'pimboso123'
    };
    const response = await axios.post(`http://localhost:8080/api/v1/Usuarios`,a);
        console.log('Usuário adicionado : ', response.data);
  }
  verUsuarios();