class Persona{
    constructor(nombre, email){
        this.nombre =nombre;
        this.email = email;
    }
}

class Alerta{
    constructor(fechahora,mensaje,timerId){
        this.fechahora = fechahora;
        this.mensaje = mensaje;
        this.timerId = 0;
    }
}

class Evento{
    constructor(nombre,fechahora,lugar,invitados=[],alertas=[]){
        this.nombre = nombre;
        this.fechahora = fechahora;
        this.lugar = lugar;
        this.invitados = invitados;
        this.alertas = alertas;
    }

    agregarInvitado(){
        let nombre = prompt('Nombre del invitado');
        let email = prompt('Email del invitado')
        if(email.includes('@')){
            this.invitados.push(new Persona(nombre,email))
        } else {
            alert('Email no válido')
        }
    }

    agregarAlerta(){
        let fecha = prompt('Fecha alerta');
        let mensaje = prompt('Mensaje alerta');
        this.alertas.push(new Alerta(fecha,mensaje))
    }

    activarAlertas(){
        const now = new Date();
        this.alertas.forEach((alerta)=> {
            const fechaalerta = new Date(alerta.fechahora);
            if(fechaalerta > now){
                const tiemporestante = fechaalerta - now;
                alerta.timerId = setTimeout(()=>{
                    alert(alerta.mensaje);
                },tiemporestante);
            } else {
                
            }
        })
    }

    mostrarEvento(){
        document.write(
        `<h1>${this.nombre}</h1>
        <p>${this.fechahora}<p>
        <p>${this.lugar}</p>
        <ul>`);
        this.invitados.forEach((invitado)=>document.write(`<li>${invitado.nombre}, ${invitado.email}</li>`));
        document.write(
            `</ul>
            <ul>
        `)
        this.alertas.forEach((alerta)=>document.write(`<li>${alerta.fechahora}, ${alerta.mensaje}</li>`))
        document.write(`</ul>`)
    }
}

function crearEvento(){
    let nombre = prompt('Nombre del evento');
    let fecha = prompt('Fecha del evento');
    let lugar = prompt('Lugar del evento');

    agenda.push(new Evento(nombre,fecha,lugar));
}

function cargarAgenda(){
    const AgendaLS = JSON.parse(localStorage.getItem('Agenda')) ;
    AgendaLS.forEach((evento)=>{
    agenda.push(new Evento(evento.nombre,evento.fechahora,evento.lugar,evento.invitados, evento.alertas));
    });
    agenda.forEach((evento)=>{
        evento.activarAlertas();
    })

    return agenda;
}

function guardarAgenda(){
    localStorage.setItem("Agenda", JSON.stringify(agenda));
}

function agregarEvento(evento){
    agenda.push(evento);
}

function mostrarEventos(){
    agenda.forEach((evento)=> evento.mostrarEvento())
}

function borrarEvento(){
    let nombre = prompt('Nombre del evento')
    agenda.forEach((evento)=>{
        if(evento.nombre == nombre){
            agenda.splice(evento);
            alert('Evento borrado');
        } else {
            alert('No se ha encontrado');
        }
    })
}

function borrarEventosPasados(){
    const now = new Date();
    agenda.forEach((evento)=>{
        let fechaevento = new Date(evento.fechahora);
        if(now>fechaevento){
            agenda.slice(evento)
        }
    })
}

function desactivarAlertas(nombre){
    agenda.forEach((evento)=>{
        if(evento.nombre == nombre){
            evento.alertas.forEach((alerta)=>{
                clearTimeout(alerta.timerId);   
            })
            alert(`Alertas de ${evento.nombre} desactivadas`)
        }
    })
}

function modificarEvento(nombre){
    agenda.forEach((evento)=>{
        if(evento.nombre == nombre){
            evento.nombre = prompt('Nuevo nombre evento:');
            evento.lugar = prompt('Nuevo lugar');
            evento.fechahora = prompt('Nueva fecha');

            let nombreinvitado = prompt('Nombre del invitado');
            let email = prompt('Email del invitado');

            const invitado = new Persona(nombreinvitado,email);

            evento.invitados.push(invitado);

            let fechaalerta = prompt('Fecha de la nueva alerta')
            let mensaje = prompt('Mensaje de la alerta');

            const alerta = new Alerta(fechaalerta,mensaje);

            evento.alertas.push(alerta);
        }
    })
}

// let evento1 = new Evento('partido','2023-10-24T09:40','Camp nou');
// evento1.agregarInvitado(new Persona('Messi','messi@.com'))
// evento1.agregarInvitado(new Persona('cr7','cr7@.com'))
// evento1.agregarInvitado(new Persona('Neymar','neymar@neymar.com'))

// let evento2 = new Evento('reunion','2024-10-24T20:00','Clase')
// evento2.agregarInvitado(new Persona('Yo','yo@gmail.com'));
// evento2.agregarAlerta(new Alerta('21032','Hola',2343))

// agregarEvento(evento1);
// agregarEvento(evento2);


// guardarAgenda();





// let evento1 = prompt('Nombre del evento')
// agenda.forEach((evento)=>{
//     if(evento.nombre === evento1){
//         evento.mostrarEvento();
//         evento.agregarAlerta();
//         evento.activarAlertas();

//         desactivarAlertas(evento.nombre)


//     }
// })


const agenda = [];

cargarAgenda();



let menu = true;
while(menu){
    let respuesta = prompt('1- Crear evento 2-Añadir invitados  3-Añadir alertas  4-Mostrar eventos  5-Borrar evento  6-Borrar eventos pasado  7-Modificar evento  8-Desactivar alertas  9-Cargar Agenda  10-Guardar Agenda 0-Salir');
    switch(respuesta){
    case '1' :
        crearEvento();
    break;

    case '2':
        let nombreevento = prompt('Nombre del evento')
        agenda.forEach((evento)=>{
            if(evento.nombre == nombreevento){
                evento.agregarInvitado();
            } else {
                alert('Evento no encontrado');
            }
    });
    break;

    case '3':
        let eventobuscado = prompt('Nombre del evento')
        agenda.forEach((evento)=>{
            if(evento.nombre == eventobuscado){
                evento.agregarAlerta();
            } else {
                alert('Evento no encontrado');
            }
    });
    break;

    case '4':
        cargarAgenda();
        mostrarEventos();
        menu = false;
    break;

    case '5':
        borrarEvento();
    break;

    case '6':
        borrarEventosPasados();
    break;

    case '7':
        modificarEvento();
    break;

    case '8':
        desactivarAlertas();
    break;

    case '9':
        mostrarEventos();
    break;

    case '10':
        guardarAgenda();
    break;

    case '0' :
        menu = false;
    break;

    default:
        alert('Opción no valida');
    break;
}
}






