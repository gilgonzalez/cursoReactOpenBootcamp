export class Contacto {
    nombre: string = '';
    apellido : string = '';
    email : string = '';
    conectado : boolean = false;
    constructor(nombre:string, apellido:string, email: string, conectado: boolean){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email= email;
        this.conectado = conectado;
    }
}