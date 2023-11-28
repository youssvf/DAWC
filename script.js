class Invitado{
    constructor(nombre,email){
        this.nombre = nombre;
        this.email = email;
    }
}
//
class Alerta{
    constructor(fecha,mensaje,timerID){
        this.fecha = new Date(fecha);
        this.mensaje = mensaje;
        this.timerID = null;
    }
}

class Evento{
    constructor(nombre,fecha,lugar,invitados = [],alertas = []){
        this.nombre = nombre;
        this.fecha = new Date(fecha);
        this.lugar = lugar;
        this.invitados = invitados;
        this.alertas = alertas;
    }

    agregarInvitado(){
        let nombre = prompt('Nombre del invitado;');
        let email = prompt('Email del invitado;');
        while(!email.includes('@')){
            alert('Email no válido');
            email = prompt('Email del invitado');
        }
        this.invitados.push(new Invitado(nombre,email));
    }

    agregarAlerta(){
        let fecha = prompt('Fecha de la alerta(AAAA-MM-DDTHH:MM):');
        let mensaje = prompt('Mensaje a mostrar:');
        
        this.alertas.push(new Alerta(fecha,mensaje));
    }

    activarAlertas(){
        const now = new Date();
        this.alertas.forEach((alerta)=>{
            if(alerta.fecha>now){
                const tiemporestante = alerta.fecha - now;
                console.log(tiemporestante)
                alerta.timerID = setTimeout(()=>{
                    alert(alerta.mensaje)
                },tiemporestante);
            }
        });
    }

    desactivarAlertas(){
        this.alertas.forEach((alerta)=> alerta.timerID = null);
    }

    
    mostrarEvento(){
        document.write(
        `<h1>${this.nombre}</h1>
        <h2>${this.fecha}</h2>
        <h2>${this.lugar}</h2>
        <ul>
        `
        );
        this.invitados.forEach((invitado)=>{
            document.write(`<li>${invitado.nombre}, ${invitado.email}</li>`)
        });
        document.write(`</ul>
        <ul>`
        );
        this.alertas.forEach((alerta)=>{
            document.write(`<li>${alerta.fecha}, ${alerta.mensaje}</li>`)
        });
        document.write(`</ul>`);
    }
}

class Agenda{
    constructor(){
        this.eventos = [];
    }

    agregarEvento(){
        let nombre = prompt('Nombre del evento');
        let fecha = prompt('Fecha del evento');
        let lugar = prompt('Lugar del evento');
        this.eventos.push(new Evento(nombre,fecha,lugar));
    }


    mostrarEventos(){
        this.eventos.forEach((evento)=>{
            document.write(
                `<h1>${evento.nombre}</h1>
                <h2>${evento.fecha}</h2>
                <h2>${evento.lugar}</h2>
                <ul>
                `
                );
                evento.invitados.forEach((invitado)=>{
                    document.write(`<li>${invitado.nombre}, ${invitado.email}</li>`)
                });
                document.write(`</ul>
                <ul>`
                );
                evento.alertas.forEach((alerta)=>{
                    document.write(`<li>${alerta.fecha}, ${alerta.mensaje}</li>`)
                });
                document.write(`</ul>`);
        });
        this.guardarAgenda();
    }

    borrarEvento(){
        let nombre = prompt('Evento a borrar');
        this.eventos = this.eventos.filter((evento)=> evento.nombre !== nombre);
    }

    borrarEventosPasados(){
        const now = new Date();
        const eventosRestantes = this.eventos.filter((evento=> new Date(evento.fecha) > now));
        this.eventos = eventosRestantes;
    }

    modificarEvento(){
        let nombre = prompt('Evento a modificar');
        let nuevonombre = prompt('Nuevo nombre')
        let nuevafecha = prompt('Nueva fecha')
        let nuevolugar = prompt('Nuevo lugar')
        const evento = this.eventos.find((evento)=> evento.nombre === nombre);
        if(evento){
            evento.nombre = nuevonombre;
            evento.fecha = nuevafecha;
            evento.lugar = nuevolugar;
            evento.agregarInvitado();
            evento.agregarAlerta();
        }
    }

    agregarInvitado(){
        let eventobuscado = prompt('Evento al que añadir');
                this.eventos.forEach((evento)=>{
                    if(evento.nombre == eventobuscado){
                        evento.agregarInvitado()
                    }
                });
    }

    agregarAlerta(){
        let nombre = prompt('Evento al que añadir')
        this.eventos.forEach((evento)=>{
            if(evento.nombre == nombre){
                evento.agregarAlerta();
                evento.activarAlertas();
            }
        });
        
    }
    

    guardarAgenda(){
        localStorage.setItem("agenda", JSON.stringify(this.eventos));
    }

    cargarAgenda(){
        const agendaLS = JSON.parse(localStorage.getItem("agenda"));
        if(agendaLS){
            agendaLS.forEach((evento)=>{
            this.eventos.push(new Evento(evento.nombre,evento.fecha,evento.lugar,evento.invitados,evento.alertas));
            this.eventos.forEach((evento)=> evento.activarAlertas());
        });
        } else {
            this.eventos = [];
        }
    }

    ejecutar(){
        let opciones;
        do{
            opciones = prompt('1.Agregar Evento 2.MostrarEventos 3.Borrar Evento 4.Borrar Eventos pasados 5. Modificar Evento 6.Agregar Invitado a un evento 7. Agregar Alerta a un evento 8.Desactivar Alertas de un evento  9.Guardar Agenda  0.Salir');
            switch(opciones){
            case "1":
                this.agregarEvento();
                break;
            case "2":
                this.mostrarEventos();
                opciones = "0";
                break;
            case "3":
                this.borrarEvento();
                break;
            case "4":
                this.borrarEventosPasados();
                break;
            case "5":
                this.modificarEvento();
                break;
            case "6":
                this.agregarInvitado();
                break;
            case "7":
                this.agregarAlerta();
                break;
            case "8":
                let nombre = prompt('Nombre del evento')
                this.eventos.forEach((evento)=>{
                    if(evento.nombre == nombre){
                        evento.desactivarAlertas();
                    }
                });
            case "9":
                this.guardarAgenda();
            }
        } while(opciones !== "0");
    }
}

const miAgenda = new Agenda();

miAgenda.cargarAgenda();

miAgenda.ejecutar();




