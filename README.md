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

# Probar la aplicación (POSTMAN)

#Departamento

Obtiene todos los departamentos

![image](https://user-images.githubusercontent.com/95490448/187088172-3f9a5d30-779f-4218-8dad-6d39daa1a297.png)

Obtiene un departamento en específico

![image](https://user-images.githubusercontent.com/95490448/187088184-2529bb1b-569e-4f1c-8c7b-aa4f29f53f8b.png)

Crear un nuevo departamento
![image](https://user-images.githubusercontent.com/95490448/187088247-d6934a43-e62b-484a-992e-c77d181fd786.png)

Actualizar un departamento

![image](https://user-images.githubusercontent.com/95490448/187088306-943e1179-0762-4632-b87c-fd1304dc3341.png)

Eliminar un departamento

![image](https://user-images.githubusercontent.com/95490448/187088342-3bcb4b68-93d0-44ce-8553-d82041a76aa2.png)

#Empleado 

Listar todos los empleados

![image](https://user-images.githubusercontent.com/95490448/187088386-896ff2e8-97c1-409a-aa8f-6f321d49b434.png)

Listar un empleado en específico

![image](https://user-images.githubusercontent.com/95490448/187088406-27fc67de-1f3a-4b26-8f22-35aee67def2e.png)

Crear un nuevo empleado

![image](https://user-images.githubusercontent.com/95490448/187088424-f79d6676-511d-49f8-8c32-731f23570a77.png)

Actualizar un empleado

![image](https://user-images.githubusercontent.com/95490448/187088556-353ef338-502a-4922-9469-46528d512af2.png)

Eliminar un empleado

![image](https://user-images.githubusercontent.com/95490448/187088567-f63bd220-97a2-4319-8f39-ab22fe623671.png)



