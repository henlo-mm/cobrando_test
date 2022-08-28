const pool = require('../database/db');

exports.crearEmpleado = (request, response) => {

    const { nit, nombre, apellido, apellido2, codigo_departamento } = request.body
  
    pool.query('INSERT INTO empleado (nit, nombre, apellido, apellido2, codigo_departamento) VALUES ($1, $2, $3, $4, $5) RETURNING *', [nit, nombre, apellido, apellido2, codigo_departamento], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`empleado: ${results.rows[0].codigo}`)
    })
}

exports.consultarEmpleados = (request, response) => {
  pool.query('SELECT * FROM empleado ORDER BY codigo ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

exports.consultarEmpleado = (request, response) => {

  const codigo = parseInt(request.params.codigo)

  pool.query('SELECT * FROM empleado WHERE codigo = $1', [codigo], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

exports.actualizarEmpleado = (request, response) => {
  const codigo = parseInt(request.params.codigo)
  const { nit, nombre, apellido, apellido2, codigo_departamento } = request.body

  pool.query(
    'UPDATE empleado SET nit = $1, nombre = $2, apellido = $3, apellido2 = $4, codigo_departamento = $5 WHERE codigo = $6',
    [nit, nombre, apellido, apellido2, codigo_departamento, codigo],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Actualización de empleado: ${codigo}`)
    }
  );
}

exports.eliminarEmpleado = (request, response) => {
  const codigo = parseInt(request.params.codigo)

  pool.query('DELETE FROM empleado WHERE codigo = $1', [codigo], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Empleado eliminado codigo: ${codigo}`)
  })
}
