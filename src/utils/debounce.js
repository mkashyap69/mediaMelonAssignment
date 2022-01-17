let timer;

export const debounce = (fn, ms = 2000) => {
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, ms);
  };
};
