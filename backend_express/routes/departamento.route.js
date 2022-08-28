const departamento = require("../controllers/departamento.controller.js");

module.exports = app => {

    app.post("/departamento/create", departamento.crearDepartamento);
  
    app.get("/departamento/all", departamento.consultarDepartamentos);

    app.get("/departamento/:codigo", departamento.consultarDepartamento);

    app.put("/departamento/update/:codigo", departamento.actualizarDepartamento);

    app.delete("/departamento/delete/:codigo", departamento.eliminarDepartamento); 
};