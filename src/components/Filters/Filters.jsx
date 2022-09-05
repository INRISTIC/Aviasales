import React from 'react';

import FilterTicket from '../FilterTicket/FilterTicket';

import stylesFilter from './Filters.module.scss';

const Filters = () => {
  return (
    <form className={stylesFilter.block}>
      <h2 className={stylesFilter.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      <ul className={stylesFilter.list}>
        <FilterTicket />
      </ul>
    </form>
  );
};
export default Filters;
