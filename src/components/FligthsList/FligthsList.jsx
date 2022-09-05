import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FligthsCard from '../FligthsCard/FligthsCard';
import { sortTickets, activeTickets } from '../../helper/sorted';
import { setCount } from '../../store/slices/cardSlice';

import FlygthsStyles from './FligthsList.module.scss';

const FlygthsList = () => {
  const dispatch = useDispatch();
  const { active, sorting } = useSelector((state) => state.filtersData);
  const { tickets, count } = useSelector((state) => state.ticketData);

  const hundleCount = (c) => {
    const newCount = c + 5;
    dispatch(setCount(newCount));
  };

  const ticketsActive = activeTickets(active, tickets);
  const ticketsSort = sortTickets(ticketsActive, sorting);

  if (ticketsSort.length) {
    return (
      <>
        {ticketsSort?.slice(0, count).map((ticket) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <FligthsCard key={`${ticket.carrier}${ticket.price}${ticket.segments[0].duration}`} {...ticket} />
        ))}
        <button onClick={() => hundleCount(count)} className={FlygthsStyles.btn} type="button">
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ
        </button>
      </>
    );
  }
  return <div className={FlygthsStyles.text}>НЕ НАШЛОСЬ НУЖНЫХ БИЛЕТОВ</div>;
};

export default FlygthsList;
