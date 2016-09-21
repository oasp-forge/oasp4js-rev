export class Product {

  constructor(
    public dtype: string,
    public id: number,
    public modificationCounter: number,
    public description: string,
    public name: string,
    public alcoholic: boolean,
    public pictureId: number
  ){}

}
