export class Staffmember {

  constructor(
    public id: number,
    public modificationCounter: number,
    public firstname: string,
    public lastname: string,
    public login: string,
    public role: number
  ){}

}
