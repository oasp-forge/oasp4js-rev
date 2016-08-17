import {Injectable} from '@angular/core'
import {Table} from '../../../models/table/Table.model'
import {tablesList} from '../../../resources/tables/Tables.resource'
import {Command} from '../../../models/command/Command.model'
import {commandsList} from '../../../resources/commands/Commands.resource'

@Injectable()
export class DetailsService{
  commands : Command[] = commandsList;
}
