export const carrying = (...args) => {
  const arr = args.filter((el) => typeof el !== 'number');
  if (arr.length === 0) {
    if (args.length > 1) {
      return args[0] + args[1];
    }
    return function (num) {
      if (typeof num === 'number') {
        return args[0] + num;
      }
      return undefined;
    };
  }
  return undefined;
};
