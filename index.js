const express = require('express'); // import express commonjs module
// import express from 'express'; // import express es6 module

const app = express(); // inicializar app ejecutando express

app.use(express.json()); // middleware para parsear el body como json

const port = process.env.PORT || 3000;

// Recibir parámetros por queries en la url
app.get('/api', (req, res) => {
  const {id} = req.query;
  if (id) {
    res.status(200).json({
      message: `Hola, tu id es ${id}`
    });
  } else {
    res.status(400).json({
      message: 'No me enviaste el id >:('
    });
  }
});

// Recibir parámetro desde params (en la url) y desde el body
app.post('/api/:nombre', (req, res) => {
  // Esto es lo mismo que "const nombre = req.params.nombre";
  const { nombre } = req.params;
  const { apellido } = req.body;
  res.status(200).json({
    message: `¡Hola, ${nombre} ${apellido}! Recibí bien tu nombre por los params y tu apellido por el body.`
  });
});

// Levantar el servidor
app.listen(port, () => {
  console.log('Soy Andrea y este es mi servidor');
  console.log(`Servidor levantado y escuchando en el puerto ${port}`);
});