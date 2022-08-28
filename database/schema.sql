CREATE DATABASE cobrando_test
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    TEMPLATE template0;

\c cobrando_test


CREATE TABLE departamento (
	codigo SERIAL PRIMARY KEY CHECK (codigo <= 10),
	nombre VARCHAR(100) NOT NULL,
	presupuesto NUMERIC,
    creado TIMESTAMP DEFAULT now(),
    actualizado TIMESTAMP DEFAULT now()
);
CREATE TABLE empleado (
    codigo SERIAL PRIMARY KEY CHECK (codigo <= 10),
    nit VARCHAR(9) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    apellido2 VARCHAR(100),
    creado TIMESTAMP DEFAULT now(),
    actualizado TIMESTAMP DEFAULT now(),
    codigo_departamento INT,
    CONSTRAINT fk_departamento
    FOREIGN KEY (codigo_departamento)
        REFERENCES departamento(codigo)
);
