import { logResults } from './logResults';

export function getCombinationMatches(userCombination, winningCombination) {
  let matches = [];

  matches = userCombination.map(
    (combination, index) =>
      combination.filter(number => winningCombination[index].includes(number))
        .length,
  );

  logResults(userCombination, winningCombination, matches);

  return matches;
}
