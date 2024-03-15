export const getYearWord = (year: number) => {
  const lastDigit = year % 10;
  const lastTwoDigits = year % 100;

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return "год";
  }
  if (
    lastDigit >= 2 &&
    lastDigit <= 4 &&
    (lastTwoDigits < 10 || lastTwoDigits >= 20)
  ) {
    return "года";
  }
  return "лет";
};
