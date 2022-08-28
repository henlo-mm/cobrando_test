const empleado = require("../controllers/empleado.controller.js");

module.exports = app => {

    app.post("/empleado/create", empleado.crearEmpleado);
  
    app.get("/empleado/all", empleado.consultarEmpleados);

    app.get("/empleado/:codigo", empleado.consultarEmpleado);

    app.put("/empleado/update/:codigo", empleado.actualizarEmpleado);

    app.delete("/empleado/delete/:codigo", empleado.eliminarEmpleado); 
};