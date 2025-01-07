import { Ticket } from '../Ticket';
import { generateNaturalSeries } from '../../common/utils/generateNaturalSeries';
import './Game.scss';

export const Game = ({ config }) => {
  const { initialTicketsCount, fieldsConfig } = config;

  const ticketsCount = generateNaturalSeries(initialTicketsCount);

  return (
    <div className="tickets">
      {ticketsCount.map(number => (
        <Ticket key={number} id={number} fieldsConfig={fieldsConfig} />
      ))}
    </div>
  );
};
