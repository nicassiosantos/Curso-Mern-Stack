const express = require('express')
const app = express()

//ROTA 
  // Method HTTP - CRUD(CREATE, READ, UPDATE, DELETE) 
    // GET - pega uma info 
    // POST - Cria uma info 
    // PUT - Altera toda a info 
    // PATH - Altera parte da info 
    // DELETE - Apaga uma info

  // Name - Um identificador da rota  

  // Function(Callback) - Responsavel por executar algum comando 

app.get('/soma', (req, res) => {
  const soma = 1 + 1; 
  res.json({soma: soma})

});

app.listen(3000)