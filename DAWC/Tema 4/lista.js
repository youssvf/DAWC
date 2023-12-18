const URL_SERVER ='http://34.229.90.4:3000/';
document.addEventListener("DOMContentLoaded",getListas);


function cargarListas(){
    fetch(URL_SERVER+"listas")
        .then(response =>{
                if(response.ok){//Si considero la respuesta correcta
                return response.json();
                } else{
                    //Aqui no me gusta la respuesta del servidor. 
                    //Opcion de lanzar un error, ojo, si no lo hago continua con el then siguiente
                }
            })
        .then(data => {
            //Aqui tengo lso datos en formato objet parseado del json recibido
            pintarListas(data)
        })
        .catch(error=>{
            //Gestion de errores
            console.error(error);
        })
}


function getListas() {
    fetch(URL_SERVER+'listas').then(response => {
        if(response.ok){
            return response.json();
        } else {
            console.error('error servidor');
        }
    }).then(data => {
        pintarListas(data);
    }).catch(error => {
        console.error(error);
    })
}

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
        botonAddTarea.addEventListener("click", saveLista);
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





function saveLista(){
    let id = prompt('id lista');
    let data = {
        "id": id,
        "nombreLista": "Lista",
        "tareas": []
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch(URL_SERVER + 'listas', options)
        .then(response => { throw new Error(error) })
        .then(data => {
            console.log(data);
        }).catch(error => {
            console.error('errorrr');
        })
}

function borrarListaServidor(){

}
function añadirTarea(){
 
}

function eliminarTarea(){

}