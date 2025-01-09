import { generateRandomNumbers } from './generateRandomNumbers';

describe('generateRandomNumbers', () => {
  it('should generate a series of natural numbers of the given length', () => {
    const length = 5;
    const maxValue = 8;
    const numbers = generateRandomNumbers(length, maxValue);
    expect(numbers).toHaveLength(5);
  });

  it('should generate unique random numbers', () => {
    const amountOfNumbers = 5;
    const maxValue = 8;
    const numbers = generateRandomNumbers(amountOfNumbers, maxValue);
    const uniqueNumbers = new Set(numbers);
    expect(uniqueNumbers.size).toBe(numbers.length);
  });

  it('should generate numbers within the specified range', () => {
    const amountOfNumbers = 5;
    const maxValue = 8;
    const numbers = generateRandomNumbers(amountOfNumbers, maxValue);
    numbers.forEach(number => {
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(maxValue);
    });
  });

  it('should generate the correct amount of numbers for edge cases', () => {
    const amountOfNumbers = 1;
    const maxValue = 1;
    const numbers = generateRandomNumbers(amountOfNumbers, maxValue);
    expect(numbers).toEqual([1]);
  });

  it('should generate an empty array if amountOfNumbers is 0', () => {
    const amountOfNumbers = 0;
    const maxValue = 1;
    const numbers = generateRandomNumbers(amountOfNumbers, maxValue);
    expect(numbers).toEqual([]);
  });

  it('should throw an error if amountOfNumbers exceeds maxValue', () => {
    const amountOfNumbers = 5;
    const maxValue = 2;
    expect(() => {
      generateRandomNumbers(amountOfNumbers, maxValue);
    }).toThrow('The amount of numbers cannot exceed the max value');
  });
});
