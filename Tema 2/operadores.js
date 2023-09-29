//8.

console.log("" + 1 + 0)
//10
console.log("" - 1 + 0)
//-1
console.log(true + false)
//1
console.log(6 / "3")
//2
console.log("2" * "3")
//6
console.log(4 + 5 + "px")
//9px
console.log("$" + 4 + 5)
//$45
console.log("4" - 2)
//2
console.log("4px" - 2)
//NaN
console.log("  -9  " + 5)
// -9 5
console.log("  -9  " - 5)
//-14
console.log(null + 1)
//1
console.log(undefined + 1)
//NaN
console.log(" \t \n" - 2)
//-2

//9.

//let a = +prompt("¿Primer número?",1)
//let b = +prompt("¿Segundo número?",2)

//alert(parseInt(a+b));//12

//10.

/*let a = 1, b = 1;
let c = ++a; // ?
let d = b++; // ?
*/

/*11.

console.log(5 > 4)//true 
console.log("apple" > "pineapple")//false
console.log("2" > "12")//true
console.log(undefined == null)//true
console.log(undefined === null)//false
console.log(null == "\n0\n")//false
console.log(null === +"\n0\n")//false

*/


/*12.

let numero = prompt("Introduzca un número",0)

let mensaje = (numero<0) ? "Menor que 0" :
    (numero<=0) ? "Menor o igual 0" :
    "Numero 'desconocido'"
alert(mensaje)
*/

/*13 y 14.

let repetir = new Boolean(true)
while(repetir){
    let edad = prompt("Introduzca tu edad")
    if(edad<=12){
    mensaje = "Niño"
} else if(edad<=26){
    mensaje = "Joven"
} else if(edad<=65){
    mensaje = "Adulto"
} else if(edad>65){
    mensaje = "Jubilado"
}
    alert(mensaje)    
    repetir = confirm("¿Desea repetir?")
}

*/

/*15.
let num = 0;
num = prompt("Introduce un número del 1 al 10")

if(num>10 || num<0){
    num = prompt("Introduzca un número válido")
}

for(let i = 0; i<=10;i++){
    document.getElementById("parrafo").innerHTML += num + '*' + i + " = "  + num*i + '<br>'
}

*/

//16.

let palabra = prompt("Introduce una fruta")

