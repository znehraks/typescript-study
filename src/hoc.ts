export type FirstOrderFunc<T, R> = (T) => R;
export type SecondOrderFunc<T, R> = (T) => FirstOrderFunc<T, R>;
export type ThirdOrderFunc<T, R> = (T) => SecondOrderFunc<T, R>;

const inc: FirstOrderFunc<number, number> = (x: number) => x + 1;

console.log(inc(1));

const divide: SecondOrderFunc<number, number> =
  (x: number): FirstOrderFunc<number, number> =>
  (y) =>
    x / y;

console.log(divide(1)(2));

const tripleAdd: ThirdOrderFunc<number, number> =
  (x: number): SecondOrderFunc<number, number> =>
  (y: number): FirstOrderFunc<number, number> =>
  (z: number) =>
    x + y + z;

console.log(tripleAdd(1)(2)(3));
