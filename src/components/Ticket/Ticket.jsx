import { ResultButton } from '../ResultButton';
import { Field } from '../Field';
import { MagicWand } from '../MagicWand';

export const Ticket = ({ id, fieldsConfig }) => {
  return (
    <div>
      <div>
        <h3>{`Билет ${id}`}</h3>
        <MagicWand />
      </div>
      <div>
        {fieldsConfig.map(fieldConfig => (
          <Field key={fieldConfig.id} fieldConfig={fieldConfig} />
        ))}
      </div>
      <div>
        <ResultButton msg="Показать результат" />
      </div>
    </div>
  );
};
