const URL_SERVER ="http://54.91.187.28:3000/";
document.addEventListener("DOMContentLoaded",cargarListas,{once:true})

function pintarListas(listas){
    listas.forEach(element => {
        const seccionListaNueva=document.createElement("section");
        const listaNueva=document.createElement("ol");
        listaNueva.id=element.id;
        const tituloLista=document.createElement("h2");
        tituloLista.innerText=element.nombreLista;
        const botonAddTarea=document.createElement("button");
        const botonBorrarLista=document.createElement("button");
        const botonEliminarTarea=document.createElement("button");
        botonAddTarea.innerText="Añadir Tarea";
        botonAddTarea.addEventListener("click", añadirTarea);
        botonBorrarLista.textContent="Borrar Lista";
        botonBorrarLista.addEventListener("click", borrarListaServidor);
        botonEliminarTarea.innerText="Eliminar Tarea";
        botonEliminarTarea.addEventListener("click",eliminarTarea);
        document.querySelector("main").append(seccionListaNueva);
        seccionListaNueva.append(tituloLista,botonBorrarLista,botonAddTarea,botonEliminarTarea,listaNueva);
        element.tareas.forEach(tarea=>{
            const tareaNueva=document.createElement("li");
            tareaNueva.innerText=tarea;
            listaNueva.append(tareaNueva);
            }
        )
    });
}

function ejemploGet() {
    
}

function cargarListas(){
    fetch(URL_BASE + "listas")
        .then(response => {
            if (response.ok) {//Si considero la respuesta correcta
                return response.json();
            } else {
                //Aqui no me gusta la respuesta del servidor. 
                //Opcion de lanzar un error, ojo, si no lo hago continua con el then siguiente
            }
        })
        .then(data => {
            //Aqui tengo lso datos en formato objet parseado del json recibido
            console.log(typeof data, data);
        })
        .catch(error => {
            //Gestion de errores
            console.error(error);
        })
}

function añadirListaNueva(){

}

function borrarListaServidor(){

}
function añadirTarea(){
 
}

function eliminarTarea(){

}