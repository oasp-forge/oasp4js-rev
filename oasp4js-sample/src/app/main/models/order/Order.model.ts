export class Order {

  constructor(
    public id: number,
    public modificationCounter: number,
    public state: number,
    public table_id: number
  ){}

}
