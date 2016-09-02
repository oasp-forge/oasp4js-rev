import {Command} from '../../models/command/Command.model';
import {tablesList} from '../tables/Tables.resource'

//All the available commands on the system/menu

export let commandId:number[] = [100000];

let command1 = new Command(commandId[0],'Schnitzel-Menü', 'CANCELLED', 6.99,'...');
commandId[0]++;
let command2 = new Command(commandId[0],'test {{ 1+2 }}', 'CANCELLED', 0.00, '...');
commandId[0]++;
let command3 = new Command(commandId[0], 'Pfifferlinge-Menü', 'CANCELLED', 8.99, '...');
commandId[0]++;
let command4 = new Command(commandId[0],'Goulasch-Menü', 'ORDERED', 7.99, '...');
commandId[0]++;
let command5 = new Command(commandId[0], 'Cola', 'ORDERED', 1.20, '...');
commandId[0]++;

export let commandsList:Command[] = [
  command1,
  command2,
  command3,
  command4,
  command5
]
