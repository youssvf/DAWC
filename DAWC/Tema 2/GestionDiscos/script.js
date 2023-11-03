class Cancion{
    constructor(titulo, autor, duracion){
        this.titulo = titulo;
        this.autor = autor;
        this.duracion = duracion;
    }
}


class Disco{
    constructor(nombre, canciones = [], artista, anyopublicacion, estilo){
        this.nombre = nombre;
        this.canciones = canciones;
        this.artista = artista;
        this.anyopublicacion = anyopublicacion;
        this.estilo = estilo;
    }

    mostrarCanciones(){
        document.write('<ul>')
        this.canciones.forEach((cancion)=>{
            document.write(`<li>${cancion.nombre}</li>`)
        });
        document.write('</ul>')
    }

    anyadirCancion(){
        let titulo = prompt('Titulo de la cancion');
        let autor = prompt('Autor');
        let duracion = prompt('Duracion en mm:SS')

        this.canciones.push(new Cancion(titulo,autor,duracion));
    }

    borrarCancion(){
        let titulo = prompt('Titulo de la cancion a borrar')
        this.canciones.forEach((cancion)=>{
            if(cancion.nombre == titulo){
                this.canciones.splice(cancion)
            } else {
                alert('Cancion no encontrada')
            }
        })
    }
}


function anyadirDisco(){
    let nombre = prompt('Nombre');
    let artista = prompt('Artista');
    const canciones = [];
    let anyopublicacion = prompt('Año de publicacion');
    let estilo = prompt('Estilo musical');

    const disco = new Disco(nombre,canciones,artista,anyopublicacion,estilo);

    localStorage.setItem(nombre,JSON.stringify(disco));
}

function borrarDisco(){
    let discobuscado = prompt('Nombre del disco');
    try {
        localStorage.removeItem(discobuscado);
    } catch (error) {
        alert('Disco no encontrado');
    }
}

let respuesta = prompt('1-Añadir nuevo disco   2-Añadir canciones   3-Borrar disco');
let menu = true;
while(menu){
    switch(respuesta){
        case '1':
            anyadirDisco();
            menu = false;
        break;

        case '2':
            let disco = prompt('Nombre del disco al que añadir:');
            const discorecuperado = JSON.parse(localStorage.getItem(disco));
            
            discorecuperado.anyadirCancion();
        break;

        case '3':
            borrarDisco();
        break;

        case '4':
            menu = false;
        break;
        
        default:
            alert('Opción no valida');
        break;
    }
}