import {Command} from '../../models/command/Command.model';
import {tablesList} from '../tables/Tables.resource'

//All the available commands on the system/menu

let command1 = new Command(100000,'Schnitzel-Menü', 'CANCELLED', 6.99,'...');
let command2 = new Command(100001,'test {{ 1+2 }}', 'CANCELLED', 0.00, '...');
let command3 = new Command(100002, 'Pfifferlinge-Menü', 'CANCELLED', 8.99, '...');
let command4 = new Command(100003,'Goulasch-Menü', 'ORDERED', 7.99, '...');
let command5 = new Command(100004, 'Cola', 'ORDERED', 1.20, '...');

export let commandsList:Command[] = [
  command1,
  command2,
  command3,
  command4,
  command5
]
