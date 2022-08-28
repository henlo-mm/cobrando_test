# Contenedor de la base de datos

## Definimos el USER_NAME

Poner un nombre de usuario en una variable de entorno. 

`USER_NAME=esperanza`

## Crear la imagen de docker con el esquema y los datos pre-guardados

```
cd database
docker build -t ${USER_NAME}/cobrando_db .
```

## Poner a correr el servidor de bases de datos

```
docker run --name cobrando_db -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=123 -d ${USER_NAME}/cobrando_db
```
# Contenedor para el backend

## Instalar las dependencias


```
cd backend_express
```

## Crear el contenedor para el backend

`docker build -t ${USER_NAME}/backend_express .`

## Correr el contenedor

`docker run -it -p 1234:1234 ${USER_NAME}/backend_express`

# Probar la aplicación

Visite las direcciones

`localhost:1234/departamento/all`
`localhost:1234/departamento/{id}`
`localhost:1234/empleado/all`
`localhost:1234/empleado/{id}`
