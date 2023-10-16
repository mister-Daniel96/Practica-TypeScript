//El enum es muy importante para valores generales y estandares
var Estado;
(function (Estado) {
    Estado[Estado["alegre"] = 0] = "alegre";
    Estado[Estado["molesto"] = 1] = "molesto";
    Estado[Estado["triste"] = 2] = "triste";
    Estado[Estado["depresivo"] = 3] = "depresivo";
})(Estado || (Estado = {}));
var persona01 = {
    nombre: "juan",
    apellido: "ayala",
    edad: 21,
    correo: "juan968832847@gmail.com",
    estado: Estado.alegre,
};
console.log(persona01);
var Alumno01 = {
    nombre: "daniel",
    apellido: "ayala",
    edad: 20,
    correo: "daniel@gmail.com",
    estado: Estado.alegre,
    universidad: "upc",
    ciclo: 5,
};
console.log("=================");
console.log(Alumno01);
/*
let randomValue:unknown=10;
randomValue=true;
randomValue='Mateo';

randomValue.name;
console.log(randomValue);
*/
