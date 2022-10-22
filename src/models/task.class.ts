export enum NIVELES {
    NORMAL = 'normal',
    URGENTE = 'urgente',
    BLOQUEANTE = 'blocking'
}
export class Task {
    name : string ='';
    description :string = '';
    completed: boolean = false;
    level : NIVELES = NIVELES.NORMAL;

    constructor(name:string, description:string, completed:boolean, level:NIVELES){
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level;
    }
}