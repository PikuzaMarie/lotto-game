export function generateNaturalSeries(length) {
  const series = Array.from({ length: length }, (_, i) => 1 + i);
  return series;
}
