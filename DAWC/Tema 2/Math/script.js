// let numero = prompt("Número a aproximar")
// let tipoRedondeo = prompt("Aproximar hacia(arriba/abajo):")

// function redondear(numero, tipoRedondeo){
     
//      let resultado

//      switch(tipoRedondeo){
//         case('arriba') : 
//         resultado = Math.ceil(numero) 
//         break
//         case('abajo') : 
//         resultado = Math.floor(numero)
//         break;
//         default:
//             alert('Tipo de redondeo no válido')
//         return;
//     }
    
//     alert('Número aproximado:' + resultado)
//     alert("Numero aproximado hacia: " + tipoRedondeo)
// }

// redondear(numero, tipoRedondeo)

const liminferior = prompt("Introduce límite inferior")
const limsuperior = prompt("Introduce límite superior")

function generarNumero(liminferior, limsuperior){
    let resultado = Math.random(liminferior, limsuperior)
     
    alert(resultado)
}

generarNumero(liminferior, limsuperior)



