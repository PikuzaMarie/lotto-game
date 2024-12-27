import { Cell } from '../Cell';
import { generateNaturalSeries } from '../../common/utils/generateNaturalSeries';

export const Field = ({ fieldConfig }) => {
  const { id, totalCellCount, requiredCellCount } = fieldConfig;

  const cellsCount = generateNaturalSeries(totalCellCount);

  return (
    <div>
      <div>
        <h4>{`Поле ${id}`}</h4>
        <p>
          Отметьте {requiredCellCount}{' '}
          {requiredCellCount === 1 ? 'число' : 'чисел'}.
        </p>
      </div>
      <div>
        {cellsCount.map(number => (
          <Cell key={number} number={number} />
        ))}
      </div>
    </div>
  );
};
