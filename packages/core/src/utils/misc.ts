const roundFloat = (n: string, decimals: number) => {
  const parsed = parseFloat(n);
  const exponent = typeof decimals === 'undefined' ? 100 : 10 ** decimals;
  return Math.round((parsed + Number.EPSILON) * exponent) / exponent;
};

const debounce = (fn: () => unknown, ms: number) => {
  let timer: ReturnType<typeof setTimeout> | undefined;

  return {
    cancel: () => clearTimeout(timer),
    apply: () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = undefined;
        fn();
      }, ms);
    },
  };
};

export { roundFloat, debounce };
