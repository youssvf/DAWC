/*1. Asigna un manejador de evento a los dos momentos de carga de la página (DOMContentLoaded, load) muestra el tipo de evento y el target.

addEventListener("DOMContentLoaded", (event)=>{
    alert(event.type + ', objetivo: ' + event.currentTarget)
})

addEventListener("load", (event)=>{
    alert(event.type + ', objetivo: ' + event.currentTarget)
})

*/
//2. Mostrar un alert con las coordenadas de la pantalla en las que se ha pulsado un botón del ratón en cualquier punto del documento. Incluir también con que botón se ha pulsado. AYUDA El evento "click" igual no es la mejor idea para este ejercicio

// addEventListener("mousedown",(event)=>{
//     alert(event.screenX + 'x' + event.screenY + ', ' + event.button)
// })

//3. Muestra en un párrafo de documento las coordenadas actualizadas en las que se encuentra el ratón cada vez que se mueva.
document.addEventListener("DOMContentLoaded", ()=>{
    addEventListener("mousemove", (event)=>{
    document.getElementById("parrafo").innerText = `La posicion es: ${event.screenX}x${event.screenY}`;
})
})


//4. Mostrar un alert con la tecla que se ha pulsado. Indicar también si estaba pulsada simultáneamente la tecla Alt o la tecla Ctrl
//5. Mostrar un texto en un párrafo con las dimensiones de la ventana cada vez que es redimensionada .
//6. Crea un parrafo con un texto y que cada vez entres al parrafo cambie el color del texto de negro a rojo y viceversa al salir.
//7. Crea un input tipo texto y que al salir del campo el contenido se pase a mayúsculas automáticamente.
//8. Coloca una imagen en el documento  y que cuando pasemos por encima la imagen cambie (lo puedes hacer con dos imágenes diferentes o la misma en diferentes tamaños)
//9. Haz un juego en el que el usuario tenga que adivinar una letra  aleatoria del abecedario pulsando en el teclado (No hay que introducirla en ningún campo de texto ni similar). Indicandole mayor o menor según el orden alfabético en un párrafo en el documento. 


