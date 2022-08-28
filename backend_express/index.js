const express = require('express');
/* swaggerJsdoc = require("swagger-jsdoc"),
swaggerUi = require("swagger-ui-express"); */
const app = express();

const port = 1234;

app.use(express.json());

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})
app.use(express.urlencoded({ extended: true }));

//Rutas
require("./routes/departamento.route")(app);
require("./routes/empleado.route")(app);

/* const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Documentación api",
        version: "0.1.0",
        description:
          "CRUD de empleado y departamento",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
    
      },
      servers: [
        {
          url: "http://localhost:1234/empleado",
        },
      ],
    },
    apis: ["./routes/*.js"],
};
  
const specs = swaggerJsdoc(options);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
); */

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});

module.exports = app;