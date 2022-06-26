function g1<T>(a: T): void {
  console.log(a);
}

function g2<T, Q>(a: T, b: Q): void {
  console.log(a);
  console.log(b);
}

const g3 = <T>(a: T): void => {
  console.log(a);
};

const g4 = <T, Q>(a: T, b: Q): void => {
  console.log(a);
  console.log(b);
};

g1(1);

g2(2, 3);

g3(4);

g4(5, 6);

type Type1Func<T> = (T) => void;
type Type2Func<T, Q> = (T, Q) => void;
type Type3Func<T, Q, R> = (T, Q) => R;
