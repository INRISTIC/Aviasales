import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';

import { setFilters, setActiveFilters } from '../../store/slices/filtesSlice';

import styles from './FilterTicket.module.scss';

const FilterTicket = () => {
  const filters = useSelector((state) => state.filtersData.filters);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const { name, checked } = event.target;
    if (name === 'All') {
      const tempFilter = filters.map((filter) => {
        return { ...filter, isChecked: checked };
      });
      dispatch(setFilters(tempFilter));
    } else {
      const tempFilter = filters.map((filter) => (filter.name === name ? { ...filter, isChecked: checked } : filter));
      dispatch(setFilters(tempFilter));
    }
  };

  useEffect(() => {
    const activeFilters = filters.map((el) => {
      if (el.isChecked) return el.name;
      return null;
    });
    dispatch(setActiveFilters(activeFilters));
  }, [filters]);

  return (
    <>
      <li className={styles['list-item']}>
        <input
          id="All"
          name="All"
          type="checkbox"
          checked={filters.filter((item) => item?.isChecked !== true).length < 1}
          onChange={handleChange}
        />
        <label className={styles.label} htmlFor="All">
          Все
        </label>
      </li>
      {filters.map((filter) => (
        <li key={filter.name} className={styles['list-item']}>
          <input
            id={filter.name}
            type="checkbox"
            name={filter.name}
            checked={filter?.isChecked || false}
            onChange={handleChange}
          />
          <label className={styles.label} htmlFor={filter.name}>
            {filter.name}
          </label>
        </li>
      ))}
      ;
    </>
  );
};

export default FilterTicket;
