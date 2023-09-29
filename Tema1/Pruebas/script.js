//1.

    let a = 1357
    let b = 135.7
    let c = 135.7
    let d = 135e7
    let e = 0o1357
    let f = 0x1A57

    console.log(a)
    console.log(typeof a)

    console.log(b)
    console.log(typeof b)
    
    console.log(c)
    console.log(typeof c)
    
    console.log(d)
    console.log(typeof d)

    console.log(e)
    console.log(typeof e)

    console.log(f)
    console.log(typeof f)

//2.
    
//   let edad =  parseInt(prompt("Introduce tu edad"));
//   console.log(edad, typeof edad)

//3.

    let nombre = prompt("Nombre:")
    let apellidos = prompt("Apellidos:")
    let edad1 = Number(prompt("Edad:"))
    

    console.log(nombre, apellidos, edad1)

    let frase = "Nombre: " + nombre + " Apellidos: " + apellidos + " Edad:" + edad1
    document.getElementById("datos").innerHTML = frase

    let edadnueva = edad1+10
    let frase2 = "Edad dentro de 10 años: " + edadnueva
    document.getElementById("edadnueva").innerHTML = frase2

//4.

    
