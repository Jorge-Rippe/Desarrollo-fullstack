/*

Javascript - es un lenguaje debilmente tipado o dinamico

Tipos de datos en js
number
string
boolean
object
function
undefined
simbol
 */

console.log("tipos de datos");
// Number
let edad = 16;
console.log(edad); // 16
console.log(typeof edad); // number

//string - cadena de caracteres
// las cadenas tienen acceso unico y son inmutables
let nombre = "Jorge";
console.log(nombre[0]); // "Jorge"

for(let i = 0; i < nombre.length; i++) {
    console.log(nombre[i]); // "J", "o", "r", "g", "e"
}
console.log(typeof nombre); // string

//tildes o backticks
let apellido = "Rippe";

let saludo = `hola soy ${nombre} ${apellido} y tengo ${edad} años`;
console.log(saludo); // hola Jorge Rippe

let saludo2 = "hola soy " + nombre + " " + apellido + " y tengo " + edad + " años";
console.log(saludo2);

// Boolean
let sesion = true;
if (sesion) {
    console.log("sesion iniciada");
} else {
    console.log("sesion no iniciada");
}
console.log(typeof sesion); // boolean

//undefined
let estatura
console.log(estatura); // undefined
console.log(typeof estatura); // undefined

//null
let  edad2 = null;
console.log(edad2); // null
console.log(typeof edad2); // object

//simbol -> version ES6
let id = Symbol("identificador"); //REPRESENTACION UNICA DE UNA VARIABLE
console.log(id);
console.log(typeof id); // symbol

//bigint -> version ES11
let n = BigInt("1234567890123456789012345678901234567890");
console.log(n); // 1234567890123456789012345678901234567890n
console.log(typeof n); // bigint

//tipo de datos de referencia (objetos, arrays, funciones)

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

let persona1 = new Persona("Jorge", 16);
let persona2 = new Persona("Ana", 20);
console.log(persona1); // Persona { nombre: 'Jorge', edad: 16
console.log(typeof persona1); // object

let lista = [1, 2, 3, 4, 5];
console.log(lista); // [ 1, 2, 3, 4, 5 ]
console.log(typeof lista); // object

const usuario = {
    nombre: "Jorge",
    apellido: "Rippe",
    edad: 16,
    [id]: 12345,
};
console.log(usuario.nombre); // "Jorge"
console.log(usuario[id]); // 12345
usuario.nombre = "Ana"; //modificar el nombre
console.log(usuario.nombre); // "Ana"
usuario[id] = 12345; //modificar el id
console.log(usuario);
