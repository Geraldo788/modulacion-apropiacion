// const pares = Array ()

// for (let i = 1; i <=100; i++ ){
// if (i % 2 === 0){
//     pares.push(i)
// } if (pares.length == 10){
//     break
// }
// }

// console.log(pares)


let dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
let semana = "";

Semana = "<ul>";
for (let d = 0; d < dias.length ; d++ ){
//    console.log(dias[d]);
    semana += "</ul>" + dias[d] + "</li>";
}

semana += "</ul>";
console.log(semana);