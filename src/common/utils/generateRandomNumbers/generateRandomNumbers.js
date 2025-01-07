export function generateRandomNumbers(amountOfNumbers, maxValue) {
  const numbers = new Set();
  const minValue = 1;

  while (numbers.size < amountOfNumbers) {
    numbers.add(
      Math.floor(Math.random() * (maxValue - minValue + 1) + minValue),
    );
  }
  return [...numbers];
}
