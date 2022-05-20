export const buyingCar = (initialOldCarPrice, initialNewCarPrice, save, percent) => {
  let oldCarPrice = initialOldCarPrice;
  let newCarPrice = initialNewCarPrice;
  let month = 0;
  let lesion = 0;
  while (oldCarPrice - newCarPrice + save * month < 0) {
    month += 1;
    if (month % 2 === 0) {
      lesion += 0.5;
    }

    const devalue = 100 - percent - lesion;
    oldCarPrice *= devalue / 100;
    newCarPrice *= devalue / 100;
  }
  return [month, Math.round(oldCarPrice - newCarPrice + save * month)];
}; 
