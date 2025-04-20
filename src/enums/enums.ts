export type ObjectValues<T> = T[keyof T];

export type ObjectKeys<T> = keyof T;

export type OpenString<T> = T | ({} & string);
