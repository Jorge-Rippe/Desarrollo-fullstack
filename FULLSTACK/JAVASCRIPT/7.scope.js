// ALCANCE - SCOPE VARIABLE
/*
Global (ambito global)
Funcion ( ámbito local o de función)
Block Scope (ámbito de bloque)
*/

//global

let globalVar = "Soy una variable global";

function mostrarGlobal() {
    console.log(globalVar); //accede a la variable global
}

mostrarGlobal(); // "Soy una variable global"
console.log(globalVar); // "Soy una variable global"


//funcion Scope

function miFuncion() {
    let localVar = "Soy una variable local"; //variable local
    console.log(localVar); //accede a la variable local
}

miFuncion(); // "Soy una variable local"
//console.log(localVar); // ReferenceError: localVar is not defined

//Block Scope {}> funciones, ciclos, condicionales

if (true) {
    let bloqueVar = "Soy una variable de bloque"; //variable de bloque
    console.log(bloqueVar); // "Soy una variable de bloque"
}
//nsole.log(bloqueVar); // ReferenceError: bloqueVar is not defined

for (let i = 0; i < 5; i++) {
    let bloqueVar = "Soy una variable de bloque"; //variable de bloque
    console.log(i); // "Soy una variable de bloque"
}
/*
var x -> tienen un alcance de funcion
let x -> tienen un alcance de bloque
const x -> tienen un alcance de bloque
*/