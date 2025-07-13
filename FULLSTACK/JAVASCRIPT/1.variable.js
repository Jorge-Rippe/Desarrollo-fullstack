console.log("Hello, World!");
// variable: representacion simbolica de un dato
// var "tradicional" antes de ES6
// ambito global
var nombre = "Jorge";
nombre = "Laura";
var edad = 30;
console.log(nombre);

// let: bloque de ambito, no se puede redeclarar
let apellido = "Rippe";
apellido = "Gomez";
console.log(apellido);

// const: constante, no se puede redeclarar ni reasignar
const PI = 3.1416;
console.log(PI);
//PI = "3.1416";

// convencion de nombres de variables
// camelCase: primera palabra en minuscula, las siguientes en mayuscula
let nombreCompleto = "Jorge Rippe";
// snake_case: todas las palabras en minuscula, separadas por guion bajo
let nombre_completo = "Jorge Rippe";
// pascalCase: primera letra de cada palabra en mayuscula
let NombreCompleto = "Jorge Rippe";
// kebab-case: todas las palabras en minuscula, separadas por guion medio
let nombrecompleto = "Jorge Rippe";
// SNAKE_CASE: todas las palabras en mayuscula, separadas por guion bajo

// REGLA - LETRA (A-Z, a-z), NUMERO (0-9), GUION BAJO (_), GUION (-)
let _nombre = "Jorge Rippe";
let $nombre = "Jorge Rippe";

// REGLA - NO SE PUEDE EMPEZAR CON UN NUMERO
// let 1nombre = "Jorge Rippe"; // No valido
// let nombre completo = "Jorge Rippe"; // No valido, contiene espacio
let SegundoNombre = "Armando"; // Valido, aunque no es una buena practica
segundonombre = "Armando"; // Valido, aunque no es una buena practica
console.log(SegundoNombre);
console.log(segundonombre); // Valido, aunque no es una buena practica