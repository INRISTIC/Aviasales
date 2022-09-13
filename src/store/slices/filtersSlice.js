import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: [
    {
      name: 'Без пересадок',
      isChecked: true,
    },
    {
      name: '1 пересадка',
      isChecked: true,
    },
    {
      name: '2 пересадки',
      isChecked: true,
    },
    {
      name: '3 пересадки',
      isChecked: true,
    },
  ],
  isPressBtn: {
    btnPrice: true,
    btnFast: false,
    btnOptimal: false,
  },
  active: [],
  sorting: 'price',
};

const filtersData = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters(state, action) {
      state.filters = action.payload;
    },
    setActiveFilters(state, action) {
      state.active = action.payload.filter((el) => el !== null);
    },
    setIsPressBtn(state, action) {
      state.isPressBtn = action.payload;
    },
    setSorting(state, action) {
      state.sorting = action.payload;
    },
  },
});

export const { setFilters, setIsPressBtn, setActiveFilters, setSorting } = filtersData.actions;
export default filtersData.reducer;
