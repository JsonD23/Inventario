###################
CodeIgniter 3 API REST
###################

Proyecto de inventarios 

*******************
PRUEBAS DE GET,POST,PUT  Y DELETE PARA PERSONAS
*******************
Para hacer un post se necesitan estos parámetros 
la liga para thunderclient es : http://localhost/10a/10A/codeigniter3-rest-controller-main/codeigniter3-rest-controller-main/index.php/Api/Personas
{
  "nombre":"Sandra",
  "apaterno": "Neri ",
  "amaterno": "Molina",
  "matricula": "UTP0149702",
  "telefono":"2223771315",
  "correo":"UTP0149702@GMAIL.COM"

}

Si necesito hacer un get se ocupa igual la siguiente liga : http://localhost/10a/10A/codeigniter3-rest-controller-main/codeigniter3-rest-controller-main/index.php/Api/Personas

En caso de hacer un delete necesitamos agregar la liga seguido del ID que queremos borrar  http://localhost/10a/10A/codeigniter3-rest-controller-main/codeigniter3-rest-controller-main/index.php/Api/Personas/1  
y otra vez nuestro JSON con los datos previamente guardados de la persona 

{
  "nombre":"Sandra",
  "apaterno": "Neri ",
  "amaterno": "Molina",
  "matricula": "UTP0149702",
  "telefono":"2223771315",
  "correo":"UTP0149702@GMAIL.COM"

}
Por último para realizar un PUT se necesita poner la liga con el ID de la persona que quieres actualizar http://localhost/10a/10A/codeigniter3-rest-controller-main/codeigniter3-rest-controller-main/index.php/Api/Personas/1  

Nuevamente introducir el JSON junto con los cambios a guardar
{
  "nombre":"Juan",
  "apaterno": "Lopez ",
  "amaterno": "Molina",
  "matricula": "UTP0149702",
  "telefono":"2223771315",
  "correo":"UTP0149702@GMAIL.COM"

}


**************************
PRUEBAS DE GET,POST,PUT  Y DELETE PARA Ubicaciones
**************************
Post: http://localhost/10a/10A/codeigniter3-rest-controller-main/codeigniter3-rest-controller-main/index.php/Api/Ubicaciones 
{
  "edificio": "D5 ",
  "departamento": "TICS",
  "area": "laboratorio 211"
}

Delete : la liga tiene que estar seguida del ID de la ubicación que se desee eliminar http://localhost/10a/10A/codeigniter3-rest-controller-main/codeigniter3-rest-controller-main/index.php/Api/Ubicaciones/1 seguido del JSON con todos los parámetros que contiene esa ubicación

{
  "edificio": "D5 ",
  "departamento": "TICS",
  "area": "laboratorio 211"
}


GET : con la siguiente liga obtendrá todos los datos http://localhost/10a/10A/codeigniter3-rest-controller-main/codeigniter3-rest-controller-main/index.php/Api/Ubicaciones 

PUT : con la siguiente liga seguida con el ID ingresar los datos a actualizar 
{
  "edificio": "D9 ",
  "departamento": "Automotriz",
  "area": "laboratorio 211"
}

**************************
PRUEBAS DE GET,POST,PUT  Y DELETE PARA RESGUARDOS 
**************************
LIGA
Post resguardos : http://localhost/10a/10A/codeigniter3-rest-controller-main/codeigniter3-rest-controller-main/index.php/Api/Resguardo
seguido de los datos a ingresar 
{

  "id_persona": "1 ",
  "id_mobiliario": "1",
  "fecha_asignacion": "2023-04-21 11:01:19"
}
Liga GET resguardos: http://localhost/10a/10A/codeigniter3-rest-controller-main/codeigniter3-rest-controller-main/index.php/Api/Resguardo

Para hacer un Put se necesita la liga junto con el ID del resguardo a eliminar http://localhost/10a/10A/codeigniter3-rest-controller-main/codeigniter3-rest-controller-main/index.php/Api/Resguardo/1  y el JSON con los datos a modificar

{

  "id_persona": "1 ",
  "id_mobiliario": "1",
  "fecha_asignacion": "2023-04-21 18:01:18"
}

Por último para hacer un delete se necesita ingresar la liga unto con el ID del resguardo a eliminar http://localhost/10a/10A/codeigniter3-rest-controller-main/codeigniter3-rest-controller-main/index.php/Api/Resguardo
Ingrese el json con  los datos a eliminar 
{

  "id_persona": "1 ",
  "id_mobiliario": "1",
  "fecha_asignacion": "2023-04-21 18:01:18"
}


*******************
PRUEBAS DE GET,POST,PUT  Y DELETE PARA MOBILIARIO
*******************
Para hacer el get de mobiliario http://localhost/10a/10A/codeigniter3-rest-controller-main/codeigniter3-rest-controller-main/index.php/Api/Mobiliario

Para hacer un POST: 
El json quedaría así
{
  "nombre":"Escritorio de madera",
  "descripcion": "4 metros x 4 metros ",
  "tipo": "1",
  "estado": "2",
  "fecha_registro":"2023-04-21 11:01:19",
  "activo":"1",
  "codigo":"utp_mobil13"
}
Para delete se necesitan ingresar los parámetros y la liga agregando el ID
http://localhost/10a/10A/codeigniter3-rest-controller-main/codeigniter3-rest-controller-main/index.php/Api/Mobiliario/1
{
  "nombre":"Escritorio de madera",
  "descripcion": "4 metros x 4 metros ",
  "tipo": "1",
  "estado": "2",
  "fecha_registro":"2023-04-21 11:01:19",
  "activo":"1",
  "codigo":"utp_mobil13"
}
Para hacer un put igual se necesita el ID http://localhost/10a/10A/codeigniter3-rest-controller-main/codeigniter3-rest-controller-main/index.php/Api/Mobiliario/1

y hacer los cambios en el JSON
{
  "nombre":"Escritorio de madera",
  "descripcion": "2 metros x 2 metros ",
  "tipo": "1",
  "estado": "2",
  "fecha_registro":"2023-04-21 11:01:19",
  "activo":"1",
  "codigo":"utp_mobil13234"
}



*******************
NOTA
*******************

LA LIGA PUEDE SER ASÍ http://localhost/10a/10A/codeigniter3-rest-controller-main/codeigniter3-rest-controller-main/index.php/Api/Mobiliario 
O AGREGANDO EL PUERTO http://localhost:8080/10a/10A/codeigniter3-rest-controller-main/codeigniter3-rest-controller-main/index.php/Api/Mobiliario

*******************
NOTA 2
*******************
Try y catch RAMA DE SANDRA
