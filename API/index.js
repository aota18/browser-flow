const express = require('express')
const cors = require('cors');
const app = express()
const port = 8080;

app.use((cors()))

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Hello World!')
})


// Simple Route
require('./app/routes/sample.routes.js')(app);
require('./app/routes/flow.routes.js')(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})