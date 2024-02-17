const express = require("express");
const port = 9999

const app = express();

//Middleware qui permet de traiter les données de la request
app.use(express.json()); 
app.use(express.urlencoded({extended:false}))

app.get('/api/v1', (req, res) => {
  res.send('Welcome to  TODOAPI!')
})

app.listen(port, () => console.log("Le serveur a démarré sur le port " + port))
