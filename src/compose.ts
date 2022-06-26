const f = <T>(x: T): string => `f(${x})`;
const g = <T>(x: T): string => `g(${x})`;
const h = <T>(x: T): string => `h(${x})`;

export const compose =
  <T, R>(...functions: readonly Function[]): Function =>
  (x: T): ((T) => R) => {
    const deepCopiedFunctions = [...functions];
    console.log(deepCopiedFunctions);
    return deepCopiedFunctions
      .reverse()
      .reduce((value, func) => func(value), x);
  };

const composedFGH = compose(h, g, f);
console.log(composedFGH("x"));
