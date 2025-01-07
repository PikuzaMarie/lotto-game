import { Cell } from '../Cell';
import { generateNaturalSeries } from '../../common/utils/generateNaturalSeries';
import './Field.scss';

export const Field = ({ fieldConfig }) => {
  const { id, totalCellCount, requiredCellCount } = fieldConfig;

  const cellsCount = generateNaturalSeries(totalCellCount);

  return (
    <div className="field">
      <div className="field-header">
        <h4 className="field-header__heading">{`Поле ${id}`}</h4>
        <p className="field-header__text">
          Отметьте {requiredCellCount}{' '}
          {requiredCellCount === 1 ? 'число' : 'чисел'}.
        </p>
      </div>
      <div className="field__cells">
        {cellsCount.map(number => (
          <Cell key={number} number={number} />
        ))}
      </div>
    </div>
  );
};
