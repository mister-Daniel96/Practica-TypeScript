enum Modalidad {
  "virtual" = "Virtual",
  "presencial" = "Presencial",
}
class Persona {
  private name: string;
  private lastname: string;
  private gender: string;
  constructor(name: string, lastname: string, gender: string) {
    this.name = name;
    this.lastname = lastname;
    this.gender = gender;
  }

  get getName(): string {
    return this.name;
  }
  get getLastName(): string {
    return this.lastname;
  }
  get getGender(): string {
    return this.gender;
  }

  set setName(v: string) {
    this.name = v;
  }
  set setLastName(v: string) {
    this.lastname = v;
  }
  set setGender(v: string) {
    this.gender = v;
  }
}
class Profesor extends Persona {
  private modalidad: Modalidad;
  constructor(
    name: string,
    lastname: string,
    gender: string,
    modalidad: Modalidad
  ) {
    super(name, lastname, gender);
    this.modalidad = modalidad;
  }
}

class Curso {
  private name: string;
  private hours: number;
  private profesor: Profesor;
  constructor(name: string, hours: number, profesor: Profesor) {
    this.name = name;
    this.hours = hours;
    this.profesor = profesor;
  }

  get getName(): string {
    return this.name;
  }
  get getHours(): number {
    return this.hours;
  }
  get getProfesor(): Profesor {
    return this.profesor;
  }
  set setName(v: string) {
    this.name = v;
  }
  set setHours(v: number) {
    this.hours = v;
  }
  set setProfesor(v: Profesor) {
    this.profesor = v;
  }
}

class Estudiante extends Persona {
  private carer: string;
  private cursos: Curso[];
  constructor(
    name: string,
    lastname: string,
    gender: string,
    carer: string,
    cursos: Curso[]
  ) {
    super(name, lastname, gender);
    this.carer = carer;
    this.cursos = cursos;
  }

  verDataCompleta(): string {
    let data: string = `Estudiante : ${this.getName} ${this.getLastName}\n
    Curso: ${this.cursos[0].getName} \n Profesor: ${this.cursos[0].getProfesor.getName} ${this.cursos[0].getProfesor.getLastName}
    `;
    return data;
  }
}
//Instancia de los profesores

//Instancia de los cursos cada curso tiene profesores
const curso01: Curso = new Curso(
  "Arquitectura Web",
  3,
  new Profesor("Rosa", "Cobeñas", "Femenino", Modalidad.presencial)
);
const curso02: Curso = new Curso(
  "Aplicaciones moviles",
  3,
  new Profesor("Nova", "Cosi", "Masculino", Modalidad.virtual)
);
const curso03: Curso = new Curso(
  "Arquitectura de Negocio",
  3,
  new Profesor("Ramiro", "Rojas", "Masculino", Modalidad.presencial)
);

const cursosTotales: Curso[] = [];
cursosTotales.push(curso01, curso02, curso03);
//Instancia de los alumnos

const estudiante01: Estudiante = new Estudiante(
  "Juan",
  "Ayala",
  "Masculino",
  "Ingenieria",
  cursosTotales
);

console.log(estudiante01.verDataCompleta());
type EstudianteCurso=Estudiante&Curso;//estamos usando interseccion aqui unimos ambos 

//DECLARANDO EL VALOR ANY
/**
 * @Definicion el valor any se adapta a todos los datos que nosotros le asignemos o reasignemos(no es recomendable)
 */
let valueUndefined: any = 5;
valueUndefined = "nuevo";
valueUndefined = false;
valueUndefined = undefined;
valueUndefined = null;
console.log(valueUndefined);


//Usando INTERFACE
interface Vehiculo {
  id: number;
  marca: string;
  origen: string;
  precio: number;
  recorrido: number;
}

const carro01: Vehiculo = {
  id: 1,
  marca: "toyota",
  origen: "japones",
  precio: 250000,
  recorrido: 12000,
};
console.log(carro01);

//Ejempplificar una funcion sin parametros
let novato: string = "Novato";
const generator = (): void => {
  console.log(Math.floor(Math.random() * 10));
};
generator();
//Ejemplofica una funcion con parametros

const sumar = (a: number, b: number): number => {
  return a + b;
};
console.log(sumar(5,20));





