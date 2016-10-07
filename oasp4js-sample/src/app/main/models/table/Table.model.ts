export class Table {

  constructor(
    public id: number,
    public modificationCounter: number,
    public number: number,
    public state: string,
    public waiterId: number
  ) {}

  getId(): number {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
  }

  getModificationCounter(): number {
    return this.modificationCounter;
  }

  setModificationCounter(modificationCounter: number) {
    this.modificationCounter = modificationCounter;
  }

  getNumber(): number {
    return this.number;
  }

  setNumber(number: number) {
    this.number = number;
  }

  getState(): string {
    return this.state;
  }

  setState(state: string) {
    this.state = state;
  }

  getWaiterId(): number {
    return this.waiterId;
  }

  setWaiter(waiterId: number) {
    this.waiterId = waiterId;
  }
}
