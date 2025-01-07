import { ResultButton } from '../ResultButton';
import { Field } from '../Field';
import { MagicWand } from '../MagicWand';
import { useNumberSelection } from '../../common/hooks/useNumberSelection';
import { generateRandomNumbers } from '../../common/utils/generateRandomNumbers';
import './Ticket.scss';

export const Ticket = ({ id, fieldsConfig }) => {
  const [fieldSelectionStates, setSelectionState] = useNumberSelection();

  const onMagicWandClick = () => {
    const randomSelectionStates = fieldsConfig.map(fieldConfig =>
      generateRandomNumbers(
        fieldConfig.requiredCellCount,
        fieldConfig.totalCellCount,
      ),
    );
    setSelectionState(randomSelectionStates);
  };
  return (
    <div className="ticket">
      <div className="ticket-header">
        <h3 className="ticket-header__heading">{`Билет ${id}`}</h3>
        <MagicWand handleMagicWandClick={onMagicWandClick} />
      </div>
      <div className="ticket__fields">
        {fieldsConfig.map((fieldConfig, index) => (
          <Field
            key={fieldConfig.id}
            fieldConfig={fieldConfig}
            selectionState={fieldSelectionStates[index]}
          />
        ))}
      </div>
      <div className="ticket__result">
        <ResultButton msg="Показать результат" />
      </div>
    </div>
  );
};
