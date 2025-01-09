import { getCombinationMatches } from './getCOmbinationMatches';
import { logResults } from './logResults';
jest.mock('./logResults');

describe('getCombinationMatches', () => {
  it('should correctly count matches in combinations', () => {
    const userCombination = [
      [1, 4, 9, 8, 10, 11, 12],
      [8, 4, 6],
    ];
    const winningCombination = [
      [16, 4, 9, 8, 13, 14, 2],
      [4, 5, 12],
    ];

    const expectedMatches = [3, 1];
    const matches = getCombinationMatches(userCombination, winningCombination);

    expect(matches).toEqual(expectedMatches);
  });

  it('should return array of zeros if there are no matches', () => {
    const userCombination = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const winningCombination = [
      [4, 5, 6],
      [1, 2, 3],
    ];

    const expectedMatches = [0, 0];
    const matches = getCombinationMatches(userCombination, winningCombination);

    expect(matches).toEqual(expectedMatches);
  });

  test('should return an empty array when userCombination is empty', () => {
    const userCombination = [];
    const winningCombination = [];

    const matches = getCombinationMatches(userCombination, winningCombination);

    expect(matches).toEqual([]);
  });

  it('should call logResults with correct arguments', () => {
    const userCombination = [
      [1, 5, 8],
      [4, 7, 6],
    ];
    const winningCombination = [
      [1, 5, 11],
      [10, 7, 8],
    ];

    const expectedMatches = [2, 1];
    getCombinationMatches(userCombination, winningCombination);

    expect(logResults).toHaveBeenCalledWith(
      userCombination,
      winningCombination,
      expectedMatches,
    );
  });
});
