// Crea un programa que muestre en el documento HTML la siguiente información:
// Alto y ancho interno y externo de la ventana actual
// Nombre y versión del navegador.
// Comprobar si las cookies están habilitadas
// Muestra la URL actual.
// Muestra la profundidad de color de la pantalla  y la resolución.

document.getElementById("parrafo").innerHTML = 
"Altura y ancho de la pantalla interno: " + innerHeight + "x" + innerWidth + "<br>" + 
"Altura y ancho de la pantalla externo: " + outerHeight + "x" + outerWidth +"<br>" +
"Nombre y version del navegador: " + navigator.appName + ", " + navigator.appVersion + "<br>" +
"¿Cookies activadas?: " + navigator.cookieEnabled + "<br>" +
"url actual: " + location.href + "<br>" +
"Profundidad de color de pantalla : " + screen.colorDepth + "<br>" +
"Resolución: " + screen.height + "x" + screen.width;


//Crea un programa que pida al usuario una URL, y con este dato abrir  otra ventana con esta URL y de ancho y alto la mitad de la ventana actual.

// let url = prompt("Introduzca una url");

// let width = screen.width/2;
// let height = screen.height/2;

// window.open(url,"", "width=" + width + ", height=" + height +"")



// Crea un programa que vaya mostrando en un documento HTML la hora, debe actualizarse cada segundo. 
// El Mensaje que muestre debe ser con  el siguiente formato: “Son las 09:25:03 horas PM” es decir debe mostrar la hora en formato 12 Horas (AM/PM). 
// Ayuda , debes usar alguno de los métodos globales del objeto window que nos permite diferir la ejecución de una tarea.

function mostrarHora2(){
    const hora = new Date();
    document.getElementById("hora").innerHTML = "Son las " + hora.toLocaleTimeString("en-US");
}


setInterval(mostrarHora2,1000)