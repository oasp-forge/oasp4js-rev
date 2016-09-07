export class Table {

  constructor(
    public id: number,
    public modificationCounter: number,
    public number: number,
    public state: number,
    public waiterId: number
  ){}

  getId():number{
    return this.id;
  }

  setId(id:number){
    this.id = id;
  }

  getModificationCounter():number{
    return this.modificationCounter;
  }

  setModificationCounter(modificationCounter:number){
    this.modificationCounter = modificationCounter;
  }

  getNumber():number{
    return this.number;
  }

  setNumber(number:number){
    this.number = number;
  }

  getState():number{
    return this.state;
  }

  setState(state:number){
    this.number = state;
  }

  getWaiterId():number{
    return this.waiterId;
  }

  setWaiter(waiterId:number){
    this.waiterId = waiterId;
  }
}
