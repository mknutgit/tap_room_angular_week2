
export class Keg {
  public pintsRemaining: number = 124;
  public tap: boolean = false;
  constructor(public name: string, public brand: string, public price: number, public abv: number, public id: number) {

  }
}
