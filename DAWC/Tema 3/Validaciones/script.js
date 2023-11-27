document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("nombre").addEventListener("blur",validarnombre)
});

document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("apellidos").addEventListener("blur", validarApellido)
})



function validarnombre(e){
    const input = document.getElementById("nombre");
    const spanError = document.getElementById("errornombre");
    if(input.value.length<3){
        spanError.innerText="El nombre debe tener por lo menos 3 caracteres";
    } else{
        spanError.innerText="";
        input.value = input.value.charAt(0).toUpperCase() + input.value.slice(1).toLowerCase();
        const texto = input.value.split(' ');
        alert(texto)
        texto.map((palabra =>{
             
        }))
    }
}

function validarApellido(e){
    const input = document.getElementById("apellidos");
    const spanError = document.getElementById("errorapellidos");
    if(input.value.length<3){
        spanError.innerText="Los apellidos deben tener al menos 3 caracteres";
    } else{
        spanError.innerText = "";
        input.value = input.value.charAt(0).toUpperCase() + input.value.slice(1).toLowerCase();
        
    }
}

function validarEmail(e){

}

function validarDNI(e){
    const input = document.getElementById("dni");
    const span = document.getElementById("errordni")

}

