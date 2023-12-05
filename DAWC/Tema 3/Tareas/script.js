document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('addLista').addEventListener("click", anyadirLista);
})

function anyadirLista(e){
    const seccionLista = document.createElement('section');
    const titulo = document.createElement('h2');
    
    const nombreLista = prompt('Nombre de la lista');
    titulo.innerText = nombreLista;

    const btnAnyadirTarea = document.createElement("button");
    btnAnyadirTarea.innerText = 'Añadir Tarea';
    // btnAnyadirTarea.addEventListener("click", anyadirTarea);

    const btnBorrarLista = document.createElement("button");
    btnBorrarLista.innerText='Borrar Lista';
    btnBorrarLista.addEventListener('click',(e)=>(document.querySelector('section').remove()))


    document.querySelector('main').append(seccionLista);
    seccionLista.append(titulo,btnAnyadirTarea,btnBorrarLista);
}

function anyadirTarea(e){
    const tareaNueva = document.createElement('ul');
    const titulo = document.createElement('h3');

    const nombre = prompt('Nombre de la tarea');
    titulo.innerText = nombre;

    const btnAnyadirDespues = document.createElement("button");
    btnAnyadirDespues.innerText = 'Añadir Tarea Después';

    
}