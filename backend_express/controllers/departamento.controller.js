const pool = require('../database/db');

exports.crearDepartamento = (request, response) => {

    const { nombre, presupuesto } = request.body
  
    pool.query('INSERT INTO departamento (nombre, presupuesto) VALUES ($1, $2) RETURNING *', [nombre, presupuesto], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Departamento: ${results.rows[0].codigo}`)
    })
}

exports.consultarDepartamentos = (request, response) => {
  pool.query('SELECT * FROM departamento ORDER BY codigo ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

exports.consultarDepartamento = (request, response) => {

  const codigo = parseInt(request.params.codigo)

  pool.query('SELECT * FROM departamento WHERE codigo = $1', [codigo], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

exports.actualizarDepartamento = (request, response) => {
  const codigo = parseInt(request.params.codigo)
  const { nombre, presupuesto } = request.body

  pool.query(
    'UPDATE departamento SET nombre = $1, presupuesto = $2 WHERE codigo = $3',
    [nombre, presupuesto, codigo],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Actualización de departamento: ${codigo}`)
    }
  )
}

exports.eliminarDepartamento = (request, response) => {
  const codigo = parseInt(request.params.codigo)

  pool.query('DELETE FROM departamento WHERE codigo = $1', [codigo], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Departamento eliminado codigo: ${codigo}`)
  })
}
