import { logResults } from './logResults';

/**
 * The function that finds and returns the number of matches
 * among user's and winning combinations
 *
 * @param userCombination {[]} - user's combination
 * @param winningCombination {[]} - winning combination
 *
 * @returns {[]} - array with number of matches in each field:
 * the first value is the number of matches in the first field,
 * the second value is the number of matches in the second one,
 * and so on
 */
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
