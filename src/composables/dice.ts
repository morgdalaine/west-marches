export const dieN = (sides: number) => Math.floor(Math.random() * sides);
export const die6 = () => dieN(6);

export class Die66 {
  constructor() {
    this.die1 = die6();
    this.die2 = die6();
  }

  public die1: number;
  public die2: number;
  public toString() {
    return `(${this.die1}, ${this.die2})`;
  }
}
