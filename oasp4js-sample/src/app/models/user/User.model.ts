export class User {

  constructor(
    public id: number,
    public username: string,
    public password: string,
    public permission: number
  ) {  }

  getId():number{
    return this.id;
  }

  setId(id:number){
    this.id = id;
  }

  getUsername():string{
    return this.username;
  }

  setUsername(username:string){
    this.username = username;
  }

  getPassword():string{
    return this.password;
  }

  setPassword(password:string){
    this.password = password;
  }

  getPermission():number{
    return this.permission;
  }

  setPermission(permission:number){
    this.permission = permission;
  }

}
