export const updateInventory = (currInv, newInv) => {
  const result = [];
  currInv.forEach((element) => {
    const search = newInv.find((el) => el[1] === element[1]);
    if (search !== undefined) {
      result.push([element[0] + search[0], element[1]]);
    } else {
      result.push([element[0], element[1]]);
    }
  });
  newInv.forEach((element) => {
    if (result.find((el) => el[1] === element[1]) === undefined) {
      result.push(element);
    }
  });

  return result.sort((a, b) => {
    let res;
    if (a[1] > b[1]) {
      res = 1;
    } else if (a[1] < b[1]) {
      res = -1;
    } else {
      res = 0;
    }
    return res;
  });
};
