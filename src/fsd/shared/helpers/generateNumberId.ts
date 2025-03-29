export const generateNumberId = (length = 10) =>
  Math.floor(Math.random() * Math.pow(10, length));
