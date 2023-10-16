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
        console.log('Canciones de ${this.artista}:')
        this.canciones.forEach((cancion, index) => {
      console.log(`${index + 1}. ${cancion.titulo} - ${cancion.autor} (${cancion.duracion})`);
    }); 
    }

    añadirCancion(cancion){
        this.canciones.push(cancion)
        console.log()
    }

    eliminarCancion(titulo){
        this.canciones.forEach((cancion,index)=>{
            if(cancion.titulo == titulo){
                this.canciones.splice(index,1)
            }
        })
    }

}

let cancion1 = new Cancion("cancion1","autor1","1'")
let cancion2 = new Cancion("cancion2","autor2","2'")

let disco1 = new Disco("disco1",[cancion1,cancion2], "messi","1982","Punk")
disco1.mostrarCanciones()
disco1.eliminarCancion(cancion2)
disco1.mostrarCanciones()   



