import {Table} from '../../models/table/Table.model'
import {Command} from '../../models/command/Command.model'
import {commandsList} from '../commands/Commands.resource'


let t1c:Command[] = [
  commandsList[0]
]

let t2c:Command[] = [
  commandsList[1]
]

let t3c:Command[] = [
  commandsList[2]
]

let t4c:Command[] = [
  commandsList[3]
]

let t5c:Command[] = [
  commandsList[4]
]


let table1 = new Table(1,'FREE', 'Jackie Brown', t1c);
let table2 = new Table(2,'OCCUPIED', 'Vince Vega', t2c);
let table3 = new Table(3,'RESERVED', 'Hans Landa', t3c);
let table4 = new Table(4,'FREE', 'O-Ren Ishii', t4c);
let table5 = new Table(5,'FREE', 'Earl McGraw', t5c);


export let tablesList:Table[] = [
  table1,
  table2,
  table3,
  table4,
  table5
]
