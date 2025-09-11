
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const PORT = 5000;

// Middleware pour parser du JSON
app.use(express.json());

// Exemple de route API
app.get('/api/hello', (req, res) => {
  res.json({ message: "Bonjour depuis le backend !" });
});

app.listen(PORT, () => {
  console.log(`Serveur Express lancé sur le port ${PORT}`);
});