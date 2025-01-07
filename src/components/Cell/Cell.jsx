import './Cell.scss';

export const Cell = ({ number }) => {
  return (
    <button className="cell">
      <div>{number}</div>
    </button>
  );
};
