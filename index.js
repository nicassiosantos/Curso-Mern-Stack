import express from 'express'; 
import connectDatbase from "./src/database/db.js"; 
import userRoute from "./src/routes/user.route.js";



const port = 3000;
const app = express(); 

connectDatbase();
app.use(express.json());
app.use("/user", userRoute);


app.listen(port, () => console.log('Servidor rodando na porta %d', port));

//ROTA 
  // Method HTTP - CRUD(CREATE, READ, UPDATE, DELETE) 
    // GET - pega uma info 
    // POST - Cria uma info 
    // PUT - Altera toda a info 
    // PATH - Altera parte da info 
    // DELETE - Apaga uma info

  // Name - Um identificador da rota  

  // Function(Callback) - Responsavel por executar algum comando 


