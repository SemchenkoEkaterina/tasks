export const workingHours = (arr) => {
  if (arr.length === 0) {
    return [];
  }

  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const result = [];

  days.forEach((day) => {
    result.push(arr.filter((el) => el.day === day));
  });

  const resultEnd = [`${result[0][0].day}: ${result[0][0].from}-${result[0][0].to}`];
  let lastDay = result[0][0];

  result.forEach((element) => {
    if (element[0].from === lastDay.from && element[0].to === lastDay.to && element[0].day !== lastDay.day) {
      resultEnd[resultEnd.length - 1] = `${lastDay.day.toUpperCase()} - ${element[0].day.toUpperCase()}: ${
        lastDay.from
      } - ${lastDay.to}`;
    } else if (element[0].from !== lastDay.from || element[0].to !== lastDay.to) {
      resultEnd.push(`${element[0].day.toUpperCase()}: ${element[0].from} - ${element[0].to}`);
      [lastDay] = element;
    }
  });

  return resultEnd;
};
