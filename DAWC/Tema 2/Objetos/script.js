// class Usuario{
//     constructor(nombre,apellidos,edad){
//         this.nombre = nombre
//         this.apellidos = apellidos
//         this.edad = edad
//     }

//     mostrarDatos(){
//         alert(this.nombre + " " + this.apellidos + ", " +  this.edad + " años")
//     }
// }

// let manolo = new Usuario("manolo","perez",324)
// manolo.mostrarDatos()

// sessionStorage.setItem("nombre", "pedro")
// alert(sessionStorage.getItem("apellido"))



class Cancion{
    constructor (titulo, autor, duracion){
    this.titulo = titulo
    this.autor = autor
    this.duracion = duracion
    }
    
    mostrarCancion(){
        alert("Título: " + this.titulo + " Autor: " + this.autor + " Duración: " + this.duracion) 
    }
}

class Disco{
    constructor (nombre, canciones, artista, añoPublicacion, estilo){
    this.nombre = nombre
    this.canciones = canciones
    this.artista = artista
    this.añoPublicacion = añoPublicacion
    this.estilo = estilo
    }
    
    mostrarCanciones(){
        document.write('<ul>')
        this.canciones.forEach((cancion, index) => {
      document.write('<li>' + cancion.titulo + ", " +  cancion.autor + ", ("+ cancion.duracion +") </li>");
    });
    document.write('</ul>')
    }

    añadirCancion(){
        let titulo = prompt("Titulo:")
        let autor = prompt("Autor:")
        let duracion = prompt("Duracion")
        this.canciones.push(new Cancion(titulo,autor,duracion))
    }

    eliminarCancion(titulo){
        this.canciones.forEach((cancion,index)=>{
            if(cancion.titulo == titulo){
                this.canciones.splice(index,1)
            }
        })
    }

}

const coleccion = []

function anyadirDisco(){
    let nombre  = prompt("Nombre:")
    let artista = prompt("Artista:")
    let añoPublicacion = prompt("Año de publicacion:")
    let estilo = prompt("Estilo:")
    coleccion.push(new Disco(nombre,[],artista,añoPublicacion,estilo))
    }

function eliminarDisco(nombre){
    this.discos.forEach((disco,index)=> {
        if(disco.nombre == nombre){
            coleccion.splice(index,1)
        }
    })
}

function mostrarCollection(){
    document.write('<h3>Colleción de discos</h3>' + '<ul>')
    coleccion.forEach((disco,index)=>{
        document.write('<li>' + disco.nombre  + ". Artista: " + disco.artista + " Año de publicación:" + disco.añoPublicacion + " Estilo:"  + disco.estilo +'</li>')
    })
    document.write('</ul>')
}

let cancion1 = new Cancion("cancion1","autor1","1'")
let cancion2 = new Cancion("cancion2","autor2","2'")

let disco1 = new Disco("disco1",[cancion1,cancion2], "messi","1982","Punk")
let disco2 = new Disco("disco2",[cancion1,cancion2],"elbicho","2026","Pop")  

let respuesta = prompt("1-Añadir nuevo disco 2-Añadir canciones a un disco 3-Eliminar Disco 4-Guardar y Salir 5-Salir")



if(respuesta == 1){
    anyadirDisco()
} else if(respuesta ==2){
    let discobuscado = prompt("Nombre del disco")
    const indicedisco = coleccion.findIndex((disco)=> disco.nombre === discobuscado)
    if(indicedisco !== -1){
        anyadirDisco()
    }else {
        alert("Error")
    }
} else if(respuesta == 3){
    let discobuscado = prompt("Nombre del disco a borrar:")
    const indicedisco = coleccio.findIndex((disco)=> disco.nombre === discobuscado)
    if(indicedisco !== -1){
        eliminarDisco(discobuscado)
    } else {
        alert("Error al borrar disco")
    }
} else if(respuesta == 4){
    let mejorjugadordelmundo = prompt("Quien es el mejor jugador del nudo")
}

mostrarCollection()
