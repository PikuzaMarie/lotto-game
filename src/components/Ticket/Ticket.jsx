import { useState } from 'react';
import { ResultButton } from '../ResultButton';
import { Field } from '../Field';
import { MagicWand } from '../MagicWand';
import { useNumberSelection } from '../../common/hooks/useNumberSelection';
import { generateRandomSelection } from '../../features/generateRandomSelection';
import './Ticket.scss';
import { ResultMessage } from '../ResultMessage';

export const Ticket = ({ id, fieldsConfig, checkIsTicketWon }) => {
  const [fieldSelectionStates, setSelectionState] = useNumberSelection();

  const [isTicketWon, setIsTicketWon] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const onMagicWandClick = () => {
    const randomSelectionStates = generateRandomSelection(fieldsConfig);
    setSelectionState(randomSelectionStates);
  };

  const onResultClick = () => {
    const winningCombination = generateRandomSelection(fieldsConfig);
    const userCombination = fieldSelectionStates.map(
      state => state.selectedNumbers,
    );
    const isWon = checkIsTicketWon(userCombination, winningCombination);

    setIsTicketWon(isWon);
    setIsGameOver(true);
  };

  return (
    <div className="ticket">
      <div className="ticket-header">
        <h3 className="ticket-header__heading">{`Билет ${id}`}</h3>
        {!isGameOver && <MagicWand handleMagicWandClick={onMagicWandClick} />}
      </div>
      {isGameOver ? (
        <ResultMessage isTicketWon={isTicketWon} />
      ) : (
        <>
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
            <ResultButton
              msg="Показать результат"
              handleResultClick={onResultClick}
            />
          </div>
        </>
      )}
    </div>
  );
};
