import './ResultButton.scss';

export const ResultButton = ({ msg, handleResultClick }) => {
  return (
    <button type="submit" className="btn_result" onClick={handleResultClick}>
      {msg}
    </button>
  );
};
