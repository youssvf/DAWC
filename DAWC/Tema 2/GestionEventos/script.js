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
        this.timerId = timerId;
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

    agregarInvitado(invitado){
        this.invitados.push(invitado)
    }

    agregarAlerta(alerta){
        this.alertas.push(alerta)
    }

    activarAlertas(){
        const now = new Date();
        this.alertas = this.alertas.filter((alerta)=> {
            if(alerta.fechahora > now){
                return true;
            } else {
                alert(alerta.mensaje);
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
        //${this.invitados.map((invitado) => `<li>${invitado.nombre}, ${invitado.email}</li>`)}
    }
}



function cargarAgenda(){
    const AgendaLS = JSON.parse(localStorage.getItem('miAgenda')) ;
    AgendaLS.forEach((evento)=>{
    agenda.push(new Evento(evento.nombre,evento.fechahora,evento.lugar,evento.invitados, evento.alertas));
})
}

function agregarEvento(evento){
    agenda.push(evento);
}

function mostrarEventos(){
    agenda.forEach((evento)=> evento.mostrarEvento())
}

function borrarEvento(nombre){
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


const agenda = [];

cargarAgenda();





