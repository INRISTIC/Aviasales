import React from 'react';
import { format } from 'date-fns';

import FlyInfoStyles from './FlyInfo.module.scss';

const FlyInfo = ({ date, destination, stops, origin, duration }) => {
  function getTimeFromMins(mins) {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    return `${hours}Ч ${minutes}М`;
  }

  // eslint-disable-next-line no-shadow
  function getTimeEnd(date, duration) {
    return format(new Date(new Date(date).getTime() + duration * 60000), 'HH:mm');
  }

  return (
    <div className={FlyInfoStyles['cartTicket-info']}>
      <div className={FlyInfoStyles['cartTicket-info_block']}>
        <div>
          <div className={FlyInfoStyles['cartTicket-info_title']}>
            {origin} – {destination}
          </div>
          <div className={FlyInfoStyles['cartTicket-info_text']}>
            {format(new Date(date), 'HH:mm')} – {getTimeEnd(date, duration)}
          </div>
        </div>
        <div>
          <div className={FlyInfoStyles['cartTicket-info_title']}>В ПУТИ</div>
          <div className={FlyInfoStyles['cartTicket-info_text']}>{getTimeFromMins(duration)}</div>
        </div>
        <div>
          <div className={FlyInfoStyles['cartTicket-info_title']}>{stops.length} ПЕРЕСАДКИ</div>
          <div className={FlyInfoStyles['cartTicket-info_text']}>{stops.join(', ')}</div>
        </div>
      </div>
    </div>
  );
};

export default FlyInfo;
