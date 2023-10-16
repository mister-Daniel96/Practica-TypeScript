//El enum es muy importante para valores generales y estandares
enum Estado {
  "alegre",
  "molesto",
  "triste",
  "depresivo",
}

interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
  correo: string;
  estado: Estado;
}
const persona01: Persona = {
  nombre: "juan",
  apellido: "ayala",
  edad: 21,
  correo: "juan968832847@gmail.com",
  estado: Estado.alegre,
};
console.log(persona01);
//================   APLICANDO INTERSECCION
interface Estudiante {
  universidad: string;
  ciclo: number;
}
type PersonaEstudiante = Persona & Estudiante;

const Alumno01: PersonaEstudiante = {
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

//================   APLICANDO TYPE

type answer = "yes" | "no" | "tal vez" | "seguro"; //cualquier tipo de dato
//let result:answer="nuevo";----- da error porque solo debe aceptar los valores asignados arriba
let result: answer = "yes"; //funciona bien porque usa uno de sus vvalores

type respuesta = number | string; //funciona de la misma forma  pero para declarar el tipo de dato

/*
let randomValue:unknown=10;
randomValue=true;
randomValue='Mateo';

randomValue.name;
console.log(randomValue);
*/
//=====================================  USO   DE   U N K N O W
//const data: unknown= "data ingresada";
const data: string = "data ingresada";

let aux = data.toUpperCase();

//====================================   USO DE NEVER

function mostrarData(param1: string): void {
  console.log(`El dato es: ${param1}`);
}
// never significa algo que es imposible

function funcionArrojaError():never{
  throw new Error("Ha ocurrido un error");
  //es una funcion que se corta y no termina de ejecutar
}