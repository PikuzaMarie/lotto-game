export function logResults(userCombination, winningCombination, matches) {
  console.log(
    '%cuser combination:',
    'font-size: 16px; font-weight: bold; color: #b06ab3;',
  );
  console.log(userCombination);

  console.log(
    '%cwinning combination:',
    'font-size: 16px; font-weight: bold; color: #4568dc;',
  );
  console.log(winningCombination);

  console.log(
    '%cmatches amount:',
    'font-size: 16px; font-weight: bold; color: #0576ff;',
  );
  console.log(matches);
}
