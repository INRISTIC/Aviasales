import { configureStore } from '@reduxjs/toolkit';

import filtersData from './slices/todoSlice';
import ticketData from './slices/cardSlice';

export default configureStore({
  reducer: {
    filtersData,
    ticketData,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
