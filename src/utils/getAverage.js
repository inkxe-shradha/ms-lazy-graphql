export const getAverageOfTariff = (num) => {
  if (num.length === 0) {
    return 0.0;
  }
  let sum = 0;
  num.forEach((ele) => {
    sum = sum + ele;
  });
  return Math.round(sum / num.length);
};
