import './ResultMessage.scss';

export const ResultMessage = ({ isTicketWon }) => {
  return (
    <span className="result-msg">
      {isTicketWon
        ? 'Ого, вы выиграли! Поздравляем!'
        : 'К сожалению, в этот раз выиграть не удалось :('}
    </span>
  );
};
