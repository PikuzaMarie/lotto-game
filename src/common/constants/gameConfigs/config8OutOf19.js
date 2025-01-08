import { getCombinationMatches } from '../../utils/getCombinationMatches';

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

const CONFIG_8_OUT_OF_19 = {
  initialTicketsCount: 5,
  fieldsConfig: FIELDS_CONFIG,
  checkIsTicketWon,
};

export { CONFIG_8_OUT_OF_19 };
