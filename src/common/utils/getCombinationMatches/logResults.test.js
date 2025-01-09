import { logResults } from './logResults';

describe('logResults', () => {
  const userCombination = [
    [3, 2, 1],
    [4, 5, 6],
  ];
  const winningCombination = [
    [1, 2, 4],
    [7, 5, 6],
  ];
  const matches = [2, 2];

  beforeEach(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should log userCombination with correct styles', () => {
    logResults(userCombination, winningCombination, matches);

    expect(console.log).toHaveBeenCalledWith(
      '%cuser combination:',
      'font-size: 16px; font-weight: bold; color: #b06ab3;',
    );
    expect(console.log).toHaveBeenCalledWith(userCombination);
  });

  test('should log winningCombination with correct styles', () => {
    logResults(userCombination, winningCombination, matches);

    expect(console.log).toHaveBeenCalledWith(
      '%cwinning combination:',
      'font-size: 16px; font-weight: bold; color: #4568dc;',
    );
    expect(console.log).toHaveBeenCalledWith(winningCombination);
  });

  test('should log matches amount with correct styles', () => {
    logResults(userCombination, winningCombination, matches);

    expect(console.log).toHaveBeenCalledWith(
      '%cmatches amount:',
      'font-size: 16px; font-weight: bold; color: #0576ff;',
    );
    expect(console.log).toHaveBeenCalledWith(matches);
  });
});
