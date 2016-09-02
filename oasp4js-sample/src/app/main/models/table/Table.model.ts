import {Command} from '../command/Command.model'

export class Table {

  constructor(
    public number: number,
    public state: string,
    public waiter: string,
    public commands: Command[]
  ) {  }

  getNumber():number{
    return this.number;
  }

  setNumber(number:number){
    this.number = number;
  }

  getState():string{
    return this.state;
  }

  setState(state:string){
    this.state = state;
  }

  getWaiter(){
    return this.waiter;
  }

  setWaiter(waiter:string){
    this.waiter = waiter;
  }

  getCommand():Command[]{
    return this.commands;
  }

  setCommand(commands:Command[]){
    this.commands = commands;
  }

  addCommand(command:Command){
    this.commands.push(command);
  }

  removeCommand(command:Command){
    let index = this.commands.indexOf(command);
    if(index > -1){
      this.commands.splice(index, 1);
    }

  }
}
