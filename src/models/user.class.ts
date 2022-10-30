
export enum role {
    USER,
    ADMIN,

}
export class User {
    username:string ='';
    email:string = '';
    password:string = '';
    role :role = role.USER

    constructor(username:string, email:string, password:string, role:role){
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role
    }
}