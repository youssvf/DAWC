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

        
        //${this.invitados.map((invitado) => `<li>${invitado.nombre}, ${invitado.email}</li>`)}
    }
}

let evento1 = new Evento('partido','2023-10-24T09:40','Camp nou');
evento1.agregarInvitado(new Persona('Messi','messi@.com'))
evento1.agregarInvitado(new Persona('cr7','cr7@.com'))

evento1.mostrarEvento();