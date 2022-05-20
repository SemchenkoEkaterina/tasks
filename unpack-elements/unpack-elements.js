export const unpackElements = (arr) => {
  let newArr = [];
  arr.forEach((el) => {
    if (Array.isArray(el)) {
      newArr = newArr.concat(unpackElements(el));
    } else {
      newArr.push(el);
    }
  });
  return newArr;
};
