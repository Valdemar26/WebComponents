const express = require('express'); //connect express
const app = express(); //initialize application
const port = 7000; // announce port

app.use(express.static(__dirname));

app.listen(port, () => { // register port
  console.log(`Server running and listen at port ${port}...`)
})