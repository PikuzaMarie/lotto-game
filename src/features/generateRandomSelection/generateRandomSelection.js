import { generateRandomNumbers } from '../../common/utils/generateRandomNumbers';

/**
 * The function to generate fields selection state in accordance with fields configuration
 *
 * @param fieldsConfig {[]} - configuration of the fields
 *
 * @returns {[]} - combination; the number of nested arrays depends on the
 * the number of fields in the config
 */
export function generateRandomSelection(fieldsConfig) {
  const selectionState = fieldsConfig.map(fieldConfig =>
    generateRandomNumbers(
      fieldConfig.requiredCellCount,
      fieldConfig.totalCellCount,
    ),
  );
  return selectionState;
}
