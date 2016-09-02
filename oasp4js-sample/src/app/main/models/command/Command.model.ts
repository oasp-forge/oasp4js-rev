import {Table} from '../table/Table.model'

export class Command {

  constructor(
    public number: number,
    public title: string,
    public status: string,
    public price: number,
    public comment: string
  ) {  }

  getNumber():number{
    return this.number;
  }

  setNumber(number:number){
    this.number = number;
  }

  getTitle():string{
    return this.title;
  }

  setTitle(title:string){
    this.title = title;
  }

  getStatus():string{
    return this.status;
  }

  setStatus(status:string){
    this.status = status;
  }

  getPrice():number{
    return this.price;
  }

  setPrice(price:number){
    this.price = price;
  }

  getComment():string{
    return this.comment;
  }

  setComment(comment:string){
    this.comment = comment;
  }

}
