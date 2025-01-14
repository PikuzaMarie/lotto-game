import './ResultButton.scss';

export const ResultButton = ({ msg, handleResultClick, isDisabled }) => {
  return (
    <button
      type="submit"
      className="btn_result"
      onClick={handleResultClick}
      disabled={isDisabled}
    >
      {msg}
    </button>
  );
};
