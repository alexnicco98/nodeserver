const express = require('express');


const app = express();

const port = 3070;

app.get('/', (req, res) => {
  res.send("Alessandro Niccolini 559572"); 
});


app.listen(port, (err) => {
  console.log(`running server on from port:::::::${port}`);
});
