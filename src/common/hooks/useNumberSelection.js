import { useState } from 'react';

/**
 * Custom hook to manage number selection in ticket fields
 *
 * @param fieldsConfig {[]} - configuration of the fields
 *
 * @returns {[]} - array, where
 * the first value is the selection state objects of each field,
 * the second value is a function for setting values in the field
 */
export function useNumberSelection(fieldsConfig) {
  const [selectedFields, setSelectionState] = useState(
    fieldsConfig.map(() => []),
  );

  const fieldSelectionStates = fieldsConfig.map((config, index) => {
    const toggleNumber = num => {
      setSelectionState(prevSelection => {
        const newSelection = [...prevSelection];
        const fieldSelection = newSelection[index];

        if (fieldSelection.includes(num)) {
          newSelection[index] = fieldSelection.filter(n => n !== num);
        } else if (fieldSelection.length < config.requiredCellCount) {
          newSelection[index] = [...fieldSelection, num];
        } else if (fieldSelection.length === config.requiredCellCount) {
          newSelection[index] = [...fieldSelection.slice(0, -1), num];
        }

        return newSelection;
      });
    };

    const isSelectionCompleted =
      selectedFields[index].length === config.requiredCellCount;

    return {
      selectedNumbers: selectedFields[index],
      toggleNumber: toggleNumber,
      isSelectionCompleted: isSelectionCompleted,
    };
  });

  return [fieldSelectionStates, setSelectionState];
}
