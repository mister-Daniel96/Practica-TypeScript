var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Modalidad;
(function (Modalidad) {
    Modalidad["virtual"] = "Virtual";
    Modalidad["presencial"] = "Presencial";
})(Modalidad || (Modalidad = {}));
var Persona = /** @class */ (function () {
    function Persona(name, lastname, gender) {
        this.name = name;
        this.lastname = lastname;
        this.gender = gender;
    }
    Object.defineProperty(Persona.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getLastName", {
        get: function () {
            return this.lastname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getGender", {
        get: function () {
            return this.gender;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setName", {
        set: function (v) {
            this.name = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setLastName", {
        set: function (v) {
            this.lastname = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setGender", {
        set: function (v) {
            this.gender = v;
        },
        enumerable: false,
        configurable: true
    });
    return Persona;
}());
var Profesor = /** @class */ (function (_super) {
    __extends(Profesor, _super);
    function Profesor(name, lastname, gender, modalidad) {
        var _this = _super.call(this, name, lastname, gender) || this;
        _this.modalidad = modalidad;
        return _this;
    }
    return Profesor;
}(Persona));
var Curso = /** @class */ (function () {
    function Curso(name, hours, profesor) {
        this.name = name;
        this.hours = hours;
        this.profesor = profesor;
    }
    Object.defineProperty(Curso.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Curso.prototype, "getHours", {
        get: function () {
            return this.hours;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Curso.prototype, "getProfesor", {
        get: function () {
            return this.profesor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Curso.prototype, "setName", {
        set: function (v) {
            this.name = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Curso.prototype, "setHours", {
        set: function (v) {
            this.hours = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Curso.prototype, "setProfesor", {
        set: function (v) {
            this.profesor = v;
        },
        enumerable: false,
        configurable: true
    });
    return Curso;
}());
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante(name, lastname, gender, carer, cursos) {
        var _this = _super.call(this, name, lastname, gender) || this;
        _this.carer = carer;
        _this.cursos = cursos;
        return _this;
    }
    Estudiante.prototype.verDataCompleta = function () {
        var data = "Estudiante : ".concat(this.getName, " ").concat(this.getLastName, "\n\n    Curso: ").concat(this.cursos[0].getName, " \n Profesor: ").concat(this.cursos[0].getProfesor.getName, " ").concat(this.cursos[0].getProfesor.getLastName, "\n    ");
        return data;
    };
    return Estudiante;
}(Persona));
//Instancia de los profesores
//Instancia de los cursos cada curso tiene profesores
var curso01 = new Curso("Arquitectura Web", 3, new Profesor("Rosa", "Cobeñas", "Femenino", Modalidad.presencial));
var curso02 = new Curso("Aplicaciones moviles", 3, new Profesor("Nova", "Cosi", "Masculino", Modalidad.virtual));
var curso03 = new Curso("Arquitectura de Negocio", 3, new Profesor("Ramiro", "Rojas", "Masculino", Modalidad.presencial));
var cursosTotales = [];
cursosTotales.push(curso01, curso02, curso03);
//Instancia de los alumnos
var estudiante01 = new Estudiante("Juan", "Ayala", "Masculino", "Ingenieria", cursosTotales);
console.log(estudiante01.verDataCompleta());
//DECLARANDO EL VALOR ANY
/**
 * @Definicion el valor any se adapta a todos los datos que nosotros le asignemos o reasignemos(no es recomendable)
 */
var valueUndefined = 5;
valueUndefined = "nuevo";
valueUndefined = false;
valueUndefined = undefined;
valueUndefined = null;
console.log(valueUndefined);
var carro01 = {
    id: 1,
    marca: "toyota",
    origen: "japones",
    precio: 250000,
    recorrido: 12000,
};
console.log(carro01);
//Ejempplificar una funcion sin parametros
var novato = "Novato";
var generator = function () {
    console.log(Math.floor(Math.random() * 10));
};
generator();
//Ejemplofica una funcion con parametros
var sumar = function (a, b) {
    return a + b;
};
console.log(sumar(5, 20));
console.log(generator(), generator());
