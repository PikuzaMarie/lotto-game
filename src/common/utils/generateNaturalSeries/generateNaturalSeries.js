/**
 * The function to generate a natural series of a given length
 *
 * @param length {integer} - length of the series
 *
 * @returns {[]} - array of natural numbers from 1 to length
 */
export function generateNaturalSeries(length) {
  const series = Array.from({ length: length }, (_, i) => 1 + i);
  return series;
}
