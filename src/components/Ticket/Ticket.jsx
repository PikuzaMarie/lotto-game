import { ResultButton } from '../ResultButton';
import { Field } from '../Field';
import { MagicWand } from '../MagicWand';
import './Ticket.scss';

export const Ticket = ({ id, fieldsConfig }) => {
  return (
    <div className="ticket">
      <div className="ticket-header">
        <h3 className="ticket-header__heading">{`Билет ${id}`}</h3>
        <MagicWand />
      </div>
      <div className="ticket__fields">
        {fieldsConfig.map(fieldConfig => (
          <Field key={fieldConfig.id} fieldConfig={fieldConfig} />
        ))}
      </div>
      <div className="ticket__result">
        <ResultButton msg="Показать результат" />
      </div>
    </div>
  );
};
