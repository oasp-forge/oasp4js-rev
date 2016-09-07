export class OrderPosition {

  constructor(
    public id: number,
    public modificationCounter: number,
    public comment: string,
    public cook_id: number,
    public offerId: number,
    public offerName: string,
    public price: number,
    public state: string,
    public drinkState: number,
    public order_id: number
  ){}

}
