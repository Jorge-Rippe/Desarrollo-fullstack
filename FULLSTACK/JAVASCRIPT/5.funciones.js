// funcion en js
//funciones declarativas
function suma(numero1, numero2) {
    return numero1 + numero2;
}

function resta(numero1, numero2) {
    return numero1 - numero2;
}

console.log(suma(5, 3));
console.log(suma(7, 6)); // 13
console.log(resta(5, 3)); // 2
console.log(resta(8, 4)); // 4
//funciones nativas
console.log(Math.max(5, 3)); // 5
console.log(Math.pow(2, 3)); // 8


function saludo(nombre) {
    console.log("Hola " + nombre);
}

saludo("Jorge");
saludo("Juan");

let sumar = suma(5, 3);
console.log(sumar); // 8

// funciones anonimas, funciones flecha, expresiones lambda

const multiplicar = (numero1, numero2) => {
    return numero1 * numero2;
}

console.log(multiplicar(5, 3)); // 15
console.log(multiplicar(7, 6)); // 42

//funciones autoinvocables
(() => {
    console.log("Esta es una funcion autoinvocada");
})();
console.log("fin del programa");