import axios from 'axios';
import { TailSpin } from 'react-loader-spinner';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setIdx, fetchTickets, setIsLoading } from '../../store/slices/cardSlice';
import logo from '../../assets/images/Logo.svg';
import Filter from '../Filters/Filters';
import Sorting from '../Sorting/sorting';
import FlygthsList from '../FligthsList/FligthsList';

import classes from './App.module.scss';

function App() {
  const dispatch = useDispatch();
  const { tickets, isLoading, isStop, idx, isError } = useSelector((state) => state.ticketData);

  const fetchId = async () => {
    const { data } = await axios.get('https://aviasales-test-api.kata.academy/search');
    return data.searchId;
  };
  useEffect(() => {
    fetchId().then((id) => {
      dispatch(setIdx(id));
    });
  }, []);
  useEffect(() => {
    if (isStop === false) {
      dispatch(fetchTickets(idx));
    } else {
      dispatch(setIsLoading());
    }
  }, [isError, isStop, idx, tickets]);
  return (
    <div className={classes.container}>
      <header className={classes.logo}>
        <img src={logo} className={classes.logo_img} alt="логотип" />
        {isLoading && <TailSpin height={60} width={60} ariaLabel="loading-indicator" />}
      </header>
      <main className={classes['main-fly']}>
        <section className={classes['main-filter']}>
          <Filter />
        </section>
        <section className={classes['main-fly_list-flights flights']}>
          <Sorting />
          <FlygthsList />
        </section>
      </main>
    </div>
  );
}

export default App;
