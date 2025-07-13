//hoisting - elevación
/*
1. declaracion de funciones se elevan primero
2. variables declaradas con var se elevan, pero no su valor
3. variables declaradas con let y const no se elevan
4. las funciones declaradas por medio de variables  
*/

console.log(x); // undefined
var x = 5; // variable declarada con var

//console.log(y); // ReferenceError: Cannot access 'y' before initialization
//let y = 10; // variable declarada con let

//hoisting de funciones
saludo(); // Hola desde la función declarada

function saludo() {
    console.log("Hola desde la función declarada");
}
/*
1. evitar el uso de var, usar let y const
2. declarar variables al inicio del bloque
3. usar funciones declarativas
*/
