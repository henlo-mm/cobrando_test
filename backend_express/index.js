const express = require('express');
const morgan = require('morgan');
const app = express();

const port = 1234;

app.use(morgan('short'));
app.use(express.json());

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})
app.use(express.urlencoded({ extended: true }));

//Rutas
require("./routes/departamento.route")(app);
require("./routes/empleado.route")(app);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});

module.exports = app;