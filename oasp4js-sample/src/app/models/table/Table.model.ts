import {Command} from '../command/Command.model'

export class Table {

  constructor(
    public number: number,
    public state: string,
    public waiter: string,
    public commands: Command[],
    public dirtyCommands: Command[]
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

  getDirtyCommands():Command[]{
    return this.dirtyCommands;
  }

  setDirtyCommands(dirtyCommands:Command[]){
    this.dirtyCommands = dirtyCommands;
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

  addDirtyCommand(dirtyCommand:Command){
    this.dirtyCommands.push(dirtyCommand);
  }

  removeDirtyCommand(dirtyCommand:Command){
    let index = this.dirtyCommands.indexOf(dirtyCommand);
    if(index > -1){
      this.dirtyCommands.splice(index,1);
    }
  }

}
