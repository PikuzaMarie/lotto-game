import { useState } from 'react';
import { CONFIG_8_OUT_OF_19 } from '../constants/gameConfigs';

export function useNumberSelection() {
  const { fieldsConfig } = CONFIG_8_OUT_OF_19;

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
