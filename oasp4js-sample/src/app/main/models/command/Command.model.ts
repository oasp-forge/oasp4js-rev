import {Table} from '../table/Table.model'

export class Command {

  constructor(
    public id: number,
    public offerName: string,
    public state: string,
    public price: number,
    public comment: string
  ) {  }

  getId():number{
    return this.id;
  }

  setId(id:number){
    this.id = id;
  }

  getOfferName():string{
    return this.offerName;
  }

  setOfferName(offerName:string){
    this.offerName = offerName;
  }

  getState():string{
    return this.state;
  }

  setState(status:string){
    this.state = status;
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
