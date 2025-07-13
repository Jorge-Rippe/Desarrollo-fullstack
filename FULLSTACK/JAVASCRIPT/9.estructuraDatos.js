/*
estructura de datos en js > colecciones de datos
1. arrays - colecciones ordenadas, indexadas, se pueden duplicar. Listar, itera, manipular
2. set - colecciones no ordenadas, no indexadas, no se pueden duplicar. Almacenar valores unicos
3. map - colecciones no ordenadas, permiten almacenar datos a partir de claves y valores.
*/

console.log("estructura de datos");
// Arrays
let  numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
let letras = ["a", "b", "c", "d", "e"];
console.log(letras); // [ 'a', 'b', 'c', 'd', 'e' ]
let mezcla = [1, "a", 2, "b", 3, "c", true, null, undefined];
console.log(mezcla); // [ 1, 'a', 2, 'b', 3, 'c' ]
//iterar arrays
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}
//metodos para manipular arrays
//foreach - recorrer array
letras.forEach((letra) => {
    console.log(`letra ${letra}`); // a, b, c, d, e
});

//map - recorrer array y crear un nuevo array
let dobles = numeros.map((numero) => {
    return numero * 2;
});
console.log(numeros); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(dobles); // [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]

//filter - recorre el array y crea un nuevo array con los elementos que cumplen la condicion
let pares = numeros.filter((numero) => {
    return numero % 2 === 0;
});
console.log(pares); // [ 2, 4, 6, 8, 10 ]
console.log(numeros); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

//find - recorre el array y devuelve el primer elemento que cumple la condicion
let busqueda = numeros.find((numero) => {
    return numero > 5;
});
console.log(busqueda); // 6

//metodos para manipular arrays
//push - agrega un elemento al final del array
console.log(numeros);
numeros.push(11);
numeros.push(12);
console.log(numeros); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
//shift - elimina el primer elemento del array
numeros.shift();
console.log(numeros); // [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
//unshift - agrega un elemento al inicio del array
numeros.unshift(100);
console.log(numeros); // [ 100, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

//sets

let conjunto = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]);
console.log(conjunto); // Set { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }

//metodo para manipular sets
//add - agrega un elemento al set
conjunto.add(11);
console.log(conjunto); // Set { 1, 2, 3, 4
//delete - elimina un elemento del set
conjunto.delete(2);
console.log(conjunto); // Set { 1, 3, 4, 5, 6, 7, 8, 9, 10, 11 }
//has - verifica si un elemento esta en el set
console.log(conjunto.has(3)); // true
//recorrer set
conjunto.forEach((numero) => {
    console.log(numero); // 1, 3, 4, 5, 6, 7, 8, 9, 10, 11
});
//conocer el tamaño del set
console.log(conjunto.size); // 10

//maps
let mapa = new Map();
mapa.set("nombre", "Jorge");
console.log(mapa); // Map { 'nombre' => 'Jorge' }
mapa.set("edad", 26);
mapa.set(100, "cien");
mapa.set("pais", "Argentina");
console.log(mapa); // Map { 'nombre' => 'Jorge', 'edad' => 26, 'pais' => 'Argentina' }
//obtener un valor por su clave
console.log(mapa.get("nombre")); // Jorge
console.log(mapa.get(100)); // cien
mapa.set("edad", 31);
mapa.set("Edad", 31);
console.log(mapa);
//verificar si una clave existe
console.log(mapa.has("pais")); // true
//eliminar un elemento por su clave
mapa.delete("Edad");
console.log(mapa); // Map { 'nombre' => 'Jorge', 'edad' => 31, 'pais' => 'Argentina' }
//recorrer un mapa
mapa.forEach((valor, clave) => {
    console.log(`${clave}: ${valor}`); // nombre: Jorge, edad: 31, pais: Argentina
});
//obtener el tamaño del mapa
console.log(mapa.size); // 3