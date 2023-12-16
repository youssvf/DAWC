const URL_SERVER ="http://3.92.20.199:3000/";
document.addEventListener('DOMContentLoaded',obtener);

function obtener(e){
    let response = fetch(URL_SERVER + 'listas');



let commits = response.json(); // leer respuesta del cuerpo y devolver como JSON

alert(commits[0].author.login);
}