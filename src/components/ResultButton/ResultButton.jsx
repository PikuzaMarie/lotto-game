import './ResultButton.scss';

export const ResultButton = ({ msg }) => {
  return (
    <button type="submit" className="btn_result">
      {msg}
    </button>
  );
};
