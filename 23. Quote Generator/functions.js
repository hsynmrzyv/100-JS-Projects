export const generateRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
