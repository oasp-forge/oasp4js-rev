import {Table} from '../../models/table/Table.model'
import {Command} from '../../models/command/Command.model'
import {commandsList} from '../commands/Commands.resource'


let t1c:Command[] = [
  commandsList[0],
  commandsList[2],
  commandsList[3]
]

let t1dc:Command[] = [
  commandsList[0],
  commandsList[2],
  commandsList[3]
]

let t2c:Command[] = [
  commandsList[1],
  commandsList[4]
]

let t2dc:Command[] = [
  commandsList[1],
  commandsList[4]
]


let t3c:Command[] = [
  commandsList[2],
  commandsList[4],
  commandsList[5]
]

let t3dc:Command[] = [
  commandsList[2],
  commandsList[4],
  commandsList[5]
]


let t4c:Command[] = [
  commandsList[3],
  commandsList[4],
  commandsList[5]
]

let t4dc:Command[] = [
  commandsList[3],
  commandsList[4],
  commandsList[5]
]


let t5c:Command[] = [
  commandsList[1],
  commandsList[3],
  commandsList[5]
]

let t5dc:Command[] = [
  commandsList[1],
  commandsList[3],
  commandsList[5]
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
