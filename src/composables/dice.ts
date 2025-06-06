export const dieN = (sides: number, base = 0) => Math.floor(Math.random() * sides) + base;
export const die6 = () => dieN(6);

export type WeightedRecord = Record<string, number>;

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

export const arrayAtBounded = (array: string[], index: number): string => {
  return array.at(index) ?? array[array.length - 1];
};

/**
 * Returns a random value from an Array of strings
 * @param array
 * @returns string
 */
export const dieArray = (array: string[]): string => {
  return array.at(dieN(array.length)) ?? array[0];
};

/**
 * Returns a random value from a Record of string weight pairs
 * @param data `Record<string, number>` weighted string record
 * @returns string
 */
export const dieWeightedRecord = (data: WeightedRecord): string => {
  const weights = Object.values(data);
  const totalWeight = weights.reduce((memo, val) => memo + val, 0);
  let random = Math.floor(Math.random() * totalWeight);
  return (
    Object.keys(data).find((_, i) => {
      random = random - weights[i];
      return random <= 0;
    }) ?? Object.keys(data)[0]
  );
};

/**
 * Returns a random index from an Array of weights
 * @param weights
 * @returns
 */
export const weightedRandomIndex = (weights: number[]) => {
  const totalWeight = weights.reduce((memo, val) => memo + val, 0);
  let random = Math.floor(Math.random() * totalWeight);
  return Array.from(Array(weights.length).keys()).find((_, i) => {
    random = random - weights[i];
    return random <= 0;
  });
};

export const weightedRecordToArray = (data: WeightedRecord): string[] => {
  return Object.entries(data)
    .flatMap(([key, val]) => `${key}|`.repeat(val).split('|'))
    .filter((x: string) => x);
};
