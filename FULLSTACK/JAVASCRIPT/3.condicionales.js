// condicionales if, else switch, ternario

let edad = 26

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}
console.log("Fin del programa");

let precio_de_manzana = 1000;
let descuento = 0.5
if (precio_de_manzana > 1000) {
    let precio_final = precio_de_manzana - (precio_de_manzana * descuento);
    console.log("La manzana es barata");
} else {
    if (precio_de_manzana > 1000) {
        let precio_final = precio_de_manzana + (precio_de_manzana * 0.3);
        console.log("La manzana es cara");
    } else {
        console.log("La manzana es gratis");
    }
}

// switch
let dia_semana = "miercoles";
switch (dia_semana) {
    case "lunes":
        console.log("Hoy es lunes");
        break;
    case "martes":
        console.log("Hoy es martes");
        break;
    case "miercoles":
        console.log("Hoy es miercoles");
        break;
    default:
        console.log("No es lunes, martes o miercoles");
}

// operador ternario
let pensionado = true;
let es_pensionado = (pensionado) ? "es pensionado" : "no es pensionado";
console.log(es_pensionado);