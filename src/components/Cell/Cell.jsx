import './Cell.scss';

export const Cell = ({ number, isSelected, handleCellClick }) => {
  return (
    <button
      className={`cell ${isSelected ? 'selected' : ''}`}
      onClick={() => handleCellClick(number)}
    >
      <div>{number}</div>
    </button>
  );
};
