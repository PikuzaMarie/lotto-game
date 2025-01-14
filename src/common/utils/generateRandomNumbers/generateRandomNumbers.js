/**
 * The function to generate a random natural series of a given length between 1 and a specified number
 *
 * @param amountOfNumbers {integer} - length of the series
 * @param maxValue {integer} - upper border of the range
 *
 * @returns {[]} - array of random natural numbers
 * from 1 to maxValue with amountOfNumbers length
 */
export function generateRandomNumbers(amountOfNumbers, maxValue) {
  if (amountOfNumbers > maxValue) {
    throw new Error('The amount of numbers cannot exceed the max value');
  }
  const numbers = new Set();
  const minValue = 1;

  while (numbers.size < amountOfNumbers) {
    numbers.add(
      Math.floor(Math.random() * (maxValue - minValue + 1) + minValue),
    );
  }
  return [...numbers];
}
