const express = require('express');
const app = express();

app.get('/', (req, res) => {
  let msg = "";
  if(!req.query.nombre){
    msg = '<h1>Hola desconocido!</h1>';
  } else {
    msg = `<h1>Hola ${req.query.nombre}!</h1>`
  }
  res.send(msg);
});

app.listen(3000, () => console.log('Listening on port 3000!'));