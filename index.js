const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Hola desde Express!');
});

// Ruta POST de ejemplo
app.post('/saludo', (req, res) => {
  const { nombre } = req.body;
  res.send(`¡Hola, ${nombre || 'desconocido'}!`);
});

// Arrancar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
