import FlyInfo from '../FlyInfo/FlyInfo';

import FligthsCardStyles from './FligthsCard.module.scss';

const FligthsCard = ({ carrier, price, segments }) => {
  return (
    <div className={FligthsCardStyles['cartTicket-container']}>
      <div className={FligthsCardStyles['cartTicket-header']}>
        <p>{price} P</p>
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} width="110" height="36" alt="logo" />
      </div>
      {segments.map((element) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <FlyInfo key={`${element.date}${element.duration}`} {...element} />
      ))}
    </div>
  );
};

export default FligthsCard;
