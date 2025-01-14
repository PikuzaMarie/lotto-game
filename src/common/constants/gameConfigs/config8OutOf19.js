import { getCombinationMatches } from '../../utils/getCombinationMatches';

/**
 * The configuration of fields in the ticket. It is determined by the rules of the game
 *
 * @see {https://github.com/PikuzaMarie/lotto-game/blob/lotto-game/docs/games/8_out_of_19.md}
 */
const FIELDS_CONFIG = [
  {
    id: 1,
    totalCellCount: 19,
    requiredCellCount: 8,
  },
  {
    id: 2,
    totalCellCount: 2,
    requiredCellCount: 1,
  },
];

/**
 * The function to check whether the combination is winning.
 * The requirements for winning are determined by the rules of the game
 *
 * @param userCombination {[]} - user's combination
 * @param winningCombination {[]} - winning combination
 *
 * @returns {boolean} - whether the user won
 *
 * @see {https://github.com/PikuzaMarie/lotto-game/blob/lotto-game/docs/games/8_out_of_19.md}
 */
const checkIsTicketWon = (userCombination, winningCombination) => {
  // requirements for a win
  // 1) 4+ matches in the fierst field
  // 2) 3+ matches in the dirst field and 1 match in the second field

  const matches = getCombinationMatches(userCombination, winningCombination);

  const matchesInFirstField = matches[0];
  const matchesInSecondField = matches[1];

  return (
    matchesInFirstField >= 4 ||
    (matchesInFirstField >= 3 && matchesInSecondField === 1)
  );
};

/**
 * The configuration of the game
 *
 * @see {https://github.com/PikuzaMarie/lotto-game/blob/lotto-game/docs/games/8_out_of_19.md}
 */
const CONFIG_8_OUT_OF_19 = {
  initialTicketsCount: 5,
  fieldsConfig: FIELDS_CONFIG,
  checkIsTicketWon,
};

export { CONFIG_8_OUT_OF_19 };
