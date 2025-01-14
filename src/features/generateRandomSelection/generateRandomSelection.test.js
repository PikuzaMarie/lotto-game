import { generateRandomSelection } from './generateRandomSelection';

describe('generateRandomSelection', () => {
  const fieldsConfig = [
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

  it('should generate the correct number of fields', () => {
    const selection = generateRandomSelection(fieldsConfig);

    expect(selection).toHaveLength(fieldsConfig.length);
  });

  it('should generate the correct amount of numbers in each field', () => {
    const selection = generateRandomSelection(fieldsConfig);

    selection.forEach((fieldCombination, index) => {
      expect(fieldCombination).toHaveLength(
        fieldsConfig[index].requiredCellCount,
      );
    });
  });
});
