export class Offer {

  constructor(
    public id: number,
    public modificationCounter: number,
    public description: string,
    public name: string,
    public price: number,
    public number: number,
    public state: number,
    public drink_id: number,
    public meal_id: number,
    public sideDish_id: number
  ){}

}
