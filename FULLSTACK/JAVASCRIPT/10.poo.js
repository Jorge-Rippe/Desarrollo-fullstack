/*
POO (Programación Orientada a Objetos) en JavaScript > CREACION DE OBJETOS
CLASE, OBJETO, METODO O PROPIEDAD, PROTOTIPOS
*/
//creacion de un objeto literal
let usuario = {
    correo : "rippe@gmail.com",
    password : "123456",
    saludar: function() {
        console.log(`Hola soy ${this.correo}`);
    }
};
console.log(usuario); // { correo: 'rippe@gmail.com', password: '123456' }
usuario.nombre = "Jorge Rippe"; //añadir una propiedad
console.log(usuario); // { correo: 'rippe@gmail.com', password: '123456', nombre: 'Jorge Rippe' }
console.log(usuario.nombre); // "Jorge Rippe" accedemos al nombre
usuario.saludar(); // Hola soy accediendo al comportamiento del objeto

//creacion a partir de una clase Object
const persona = new Object(); //creamos un objeto vacio
persona.nombre = "Jorge";
persona.apelido = "Rippe";
persona.edad = 41;
persona.saludar = function() {
    console.log(`Mi nombre completo es ${persona.nombre}`);
};
console.log (persona); // { nombre: 'Jorge', apelido: 'Rippe', edad: 16, saludar: [Function] }
persona.saludar(); // Hola soy Jorge accediendo al comportamiento del objeto

//creacion de objetos a partir de clases constructor

function Animal(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() {
        console.log(`Hola soy un ${this.nombre} y tengo ${this.edad} años`);
    };
}
let perro = new Animal("Perro", 5);
console.log(perro); // Animal { nombre: 'Perro', edad: 5, saludar: [Function] }
perro.saludar(); // Hola soy un Perro y tengo 5 años

//creacion de objetos a partir de clases con sintaxis ES6
class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    
    mostrarInfo() {
        console.log(`Vehículo: ${this.marca} ${this.modelo}`);
    }
}

let coche = new Vehiculo("Toyota", "Corolla 2020");
console.log(coche); // Vehiculo { marca: 'Toyota', modelo: 'Corolla' }


class Avion extends Vehiculo {
    constructor(marca, modelo, capacidad) {
        super(marca, modelo); // Llamada al constructor de la clase padre
        this.capacidad = capacidad;
    }
    
    mostrarInfo() {
        super.mostrarInfo(); // Llamada al método de la clase padre
        console.log(`Capacidad: ${this.capacidad} pasajeros`);
    }
}
let avion = new Avion("Boeing", "747", 400);
console.log(avion); // Avion { marca: 'Boeing', modelo: '747', capacidad: 400 }


//encapsular atributos de un objeto
//ES2020
class Cuenta{
    #saldo
    constructor(saldo) {
        this.#saldo = saldo; // Usamos # para indicar que es privado
    }

    setSaldo(saldo) {
        if (saldo <= 0) {
            console.error("El saldo no puede ser negativo");
        } else {
            this.saldo = saldo;
        }
    }

    consultarSaldo() {
        return this.#saldo; // Accedemos al atributo privado
    }
}

let cuenta_ahorros = new Cuenta(1000);
console.log(cuenta_ahorros); // Cuenta { #saldo: 1000 }
cuenta_ahorros.saldo = -200;
cuenta_ahorros.setSaldo(500); // Cambiamos el saldo a 500
console.log(cuenta_ahorros); // Cuenta { #saldo: 500 }
console.log(cuenta_ahorros.consultarSaldo()); // 500

//closures - se usa para proteger datos

function crearCuenta(saldoInicial) {
    let saldo = saldoInicial; // Variable privada
    return {
        mostrarSaldo: function() {
            console.log(saldo);
        },
        depositar_dinero: (cantidad) => {
            saldo = saldo + cantidad;
        }
    }
}

const cuenta = crearCuenta(1000);
cuenta.mostrarSaldo(); // 1000
cuenta.saldo = 500; // No se puede modificar directamente
console.log(cuenta); // { mostrarSaldo: [Function], depositar_dinero: [Function] }
cuenta.mostrarSaldo(); // 1000
cuenta.depositar_dinero(500); // Depositamos 500
console.log(cuenta);
cuenta.mostrarSaldo(); // 1500
console.log(cuenta.saldo); // undefined, no se puede acceder directamente al saldo