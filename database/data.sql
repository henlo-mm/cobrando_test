\c cobrando_test

INSERT INTO  departamento (nombre, presupuesto) VALUES ('Recursos Humanos', '4000');
INSERT INTO  departamento (nombre, presupuesto) VALUES ('Sistemas', '12.20');

INSERT INTO  empleado (nit, nombre, apellido, apellido2, codigo_departamento) 
VALUES ('1212122', 'Esperanza', 'Olivo', 'Calderon', '2');

INSERT INTO  empleado (nit, nombre, apellido, codigo_departamento) 
VALUES ('1223122', 'Test', 'Olivo', '2');

INSERT INTO  empleado (nit, nombre, apellido, codigo_departamento) 
VALUES ('1212122', 'Test', 'Calderon', '2');