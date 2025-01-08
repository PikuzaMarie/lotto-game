import { generateRandomNumbers } from '../../common/utils/generateRandomNumbers';

export function generateRandomSelection(fieldsConfig) {
  const selectionState = fieldsConfig.map(fieldConfig =>
    generateRandomNumbers(
      fieldConfig.requiredCellCount,
      fieldConfig.totalCellCount,
    ),
  );
  return selectionState;
}
