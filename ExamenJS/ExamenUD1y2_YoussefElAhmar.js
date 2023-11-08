class Persona{
    constructor(id,username,password,nombre,apellidos,email){
        this.id = id;
        this.username = username;
        this.password = password;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
    }
}

let opciones;


class Incidencia{
    constructor(id,titulo,descripcion,idusuario,estado,idtecnico,){
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = "notificada";
        this.idtecnico = null;
        this.idusuario = null;
    }
}

class Gestion{
    constructor(){
        this.listausuarios = [];
        this.listatecnicos = [];
        this.listaincidencias = [];
    }

    asignarID(){
        let nuevoid = 0;
        const incidencias = [];
        this.listaincidencias = JSON.parse(localStorage.getItem("Incidencias"));
        if(this.listaincidencias){
            this.listaincidencias.forEach((incidencia)=>{
                incidencias.push(new Incidencia(incidencia.id,incidencia.titulo,incidencia.descripcion, incidencia.estado));
            });
            incidencias.forEach((incidencia)=>{
                if(incidencia.id > nuevoid){
                    nuevoid = incidencia.id + 1;
                }
            });
        } else{
            nuevoid = 1;
        }

        return nuevoid;
    }

    notificarIncidencia(){
        
        let titulo = prompt('Nombre de incidencia');
        let descripcion = prompt('Descripción');

        let descripcioncompleta = new Date() + descripcion

        const incidencias = [];
        this.listaincidencias = JSON.parse(localStorage.getItem("Incidencias"));
        if(this.listaincidencias){
            this.listaincidencias.forEach((incidencia)=>{
                incidencias.push(new Incidencia(incidencia.id,incidencia.titulo,incidencia.descripcion,incidencia.idusuario, incidencia.idtecnico ,incidencia.estado))
                });
            incidencias.push(new Incidencia(this.asignarID(),titulo,descripcioncompleta))
            localStorage.setItem("Incidencias", JSON.stringify(incidencias));
        } else {
            incidencias.push(new Incidencia(this.asignarID(),titulo,descripcioncompleta,));
            localStorage.setItem("Incidencias", JSON.stringify(incidencias));
        }

        this.listaincidencias = localStorage.setItem("Incidencias", JSON.stringify(incidencias))
    }

    mostrarIncidencias(){
        const incidencias = []
        this.listaincidencias = JSON.parse(localStorage.getItem("Incidencias"))
        this.listaincidencias.forEach((incidencia)=>{
            incidencias.push(new Incidencia(incidencia.id,incidencia.titulo, incidencia.descripcion, incidencia.idusuario,incidencia.estado, incidencia.idtecnico ))
        })
        incidencias.forEach((incidencia)=>{
            document.write(`<h1>${incidencia.titulo}</h1>
            <p>Descripción: ${incidencia.descripcion}</p>
            <p>Estado: ${incidencia.estado}</p>
            `);
        })
    }

    resolverIncidencias(){
        const incidencias = [];
        this.listaincidencias = JSON.parse(localStorage.getItem("Incidencias"));
        this.listaincidencias.forEach((incidencia)=>{
            incidencias.push(new Incidencia(incidencia.id,incidencia.titulo, incidencia.descripcion, incidencia.idusuario,incidencia.estado, incidencia.idtecnico ));
        })

        let nombreincidencia = prompt('Nombre de la incidencia');
        incidencias.forEach((incidencia)=>{
            if(incidencia.titulo === nombreincidencia){
                incidencia.estado = "resuelta";
            }
        })

    }

    registrarUsuario(){
        
        let id = prompt('id')
        let nombre = prompt('Nombre:');
        let apellidos = prompt('Apellidos');
        let email = prompt('Email');
        let username = prompt('Username');
        let contraseña = prompt('Contraseña');

        const usuarios = [];

        this.listausuarios = JSON.parse(localStorage.getItem("Usuarios"));
        if(this.listausuarios){
            this.listausuarios.forEach((usuario)=>{
            usuarios.push(new Persona(usuario.id,usuario.username,usuario.password,usuario.nombre,usuario.apellidos,usuario.email));
            });
            usuarios.push(new Persona(id,username,contraseña,nombre,apellidos,email));
            localStorage.setItem("Usuarios", JSON.stringify(usuarios));
        } else {
            usuarios.push(new Persona(id,username,contraseña,nombre,apellidos,email));
            localStorage.setItem("Usuarios", JSON.stringify(usuarios))
        }
    }

    registrarTecnico(){

        let id = prompt('Id')
        let nombre = prompt('Nombre:');
        let apellidos = prompt('Apellidos');
        let email = prompt('Email');
        let username = prompt('Username');
        let contraseña = prompt('Contraseña');

        const usuarios = [];

        this.listausuarios = JSON.parse(localStorage.getItem("Tecnicos"));
        if(this.listausuarios){
            this.listausuarios.forEach((usuario)=>{
            usuarios.push(new Persona(usuario.id,usuario.username,usuario.password,usuario.nombre,usuario.apellidos,usuario.email));
            });
            usuarios.push(new Persona(id,username,contraseña,nombre,apellidos,email));
            localStorage.setItem("Tecnicos", JSON.stringify(usuarios));
        } else {
            usuarios.push(new Persona(id,username,contraseña,nombre,apellidos,email));
            localStorage.setItem("Tecnicos", JSON.stringify(usuarios))
        }
    }


    iniciarSesion() {
        
        let username = prompt('Username');
        let password = prompt('Contraseña');

        const usuarios = [];
        this.listausuarios = JSON.parse(localStorage.getItem("Usuarios"));
        this.listausuarios.forEach((usuario)=>{
            usuarios.push(new Persona(usuario.id,usuario.username,usuario.password,usuario.nombre,usuario.apellidos,usuario.email));
        });

        const encontrado = usuarios.find((usuario)=> usuario.username === username && usuario.password === password);
        if(encontrado){
            alert('Correcto');
        } else {
            alert('Informacion Erronea');
            this.iniciarSesion();
        }

    }

    iniciarSesionTecnico() {
        let username = prompt('Username');
        let password = prompt('Contraseña');

        const usuarios = [];
        this.listausuarios = JSON.parse(localStorage.getItem("Tecnicos"));
        this.listausuarios.forEach((usuario)=>{
            usuarios.push(new Persona(usuario.id,usuario.username,usuario.password,usuario.nombre,usuario.apellidos,usuario.email));
        });

        const encontrado = usuarios.find((usuario)=> usuario.username === username && usuario.password === password);
        if(encontrado){
            alert('Correcto');
        } else {
            alert('Informacion Erronea');
            this.iniciarSesion();
        }
    }

    operacionesUsuario(){
        let menuUsuario = prompt('1.Notificar Incidencia  2.Mostrar Incidencias  3.Cerrar Incidencias Resueltas');
        do{
            switch(menuUsuario){
            case "1":
                this.notificarIncidencia();
                this.operacionesUsuario();
                break;
            case "2":
                this.mostrarIncidencias();
                menuUsuario = "S";
                break;
        }
        }while(menuUsuario!=="S")
        
        
    }
    operacionesTecnico(){
        let menuTecnico = prompt('1.Ver incidencias asignadas  2.Marcar incidencia como resulta  3.Archivar incidencias cerradas');
        do{
            switch(menuTecnico){
                case "1":
                    this.mostrarIncidencias();
                    break;
                case "2":
                    this.resolverIncidencias();
                    menuTecnico = "S"
                    break;
                case "3":
                    break;
        }
        }while(menuTecnico!=="S")
        
    }
    
    elegir(){
        let seleccion = prompt('¿Eres Usuario, Tecnico o deseas salir?(U/T/S)');
        do{
            switch(seleccion){
            case "U":
                let confirma = confirm('¿Estas Registrado? Aceptar si ya lo estás, Cancelar para registrarse');
                if(confirma){
                    this.iniciarSesion();
                    this.operacionesUsuario();
                    seleccion = "S";    
                } else {
                    this.registrarUsuario();
                    this.iniciarSesion();
                    this.operacionesUsuario();
                }
                break;
            case "T":
                let confirmar = confirm('¿Estas Registrado? Aceptar si ya lo estás');
                if(confirmar){
                    this.iniciarSesionTecnico();
                    this.operacionesTecnico();
                    seleccion = "0";
                } else {
                    this.registrarTecnico();
                    this.iniciarSesionTecnico();
                    this.operacionesTecnico();
                }
                break;
            default : 
                this.elegir()
                break;
        }
        }while(seleccion!== "S")
    }
}

const gestion = new Gestion();


gestion.elegir();

