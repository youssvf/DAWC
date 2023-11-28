document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("nombre").addEventListener("blur",validarnombre)
});

document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("apellidos").addEventListener("blur", validarApellido)
})

document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("dni").addEventListener("blur", validarDNI)
})



function validarnombre(e){
    const input = document.getElementById("nombre");
    const spanError = document.getElementById("errornombre");
    if(input.value.length<3){
        spanError.innerText="El nombre debe tener por lo menos 3 caracteres";
    } else{
        spanError.innerText="";
        input.value = input.value.charAt(0).toUpperCase() + input.value.slice(1).toLowerCase();
        
    }
}

function validarApellido(e){
    const input = document.getElementById("apellidos");
    const spanError = document.getElementById("errorapellidos");
    if(input.value.length<3){
        spanError.innerText="Los apellidos deben tener al menos 3 caracteres";
    } else{
        spanError.innerText = "";
        const texto = input.value.split(' ');
        const textomayus = texto.map((palabra)=>{return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()})
        input.value = textomayus.join(' ');
    }

    
}

function validarEmail(e){

}

function validarDNI(e){
    const input = document.getElementById("dni");
    const span = document.getElementById("errordni");

    

    if(input.value.length !== 9){
        span.innerText = "El DNI debe de tener 9 dígitos";
        return false;
    }else{
        span.innerText = "";
    }
    
    if(!/\d{8}[A-Z]$/.test(input.value)){
        span.innerText="Formato incorrecto";
        return false;
    }

    const numeros = input.value.slice(0,8);
    const letra = input.value.slice(8,9);
    alert(numeros + letra);
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    if(numeros%23 == ){

    }
}

