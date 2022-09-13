import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  tickets: [],
  isLoading: false,
  isError: 0,
  isStop: false,
  count: 5,
  idx: '',
};

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async (params) => {
  const { data } = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${params}`);
  return data;
});
const ticketData = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setIdx(state, action) {
      state.idx = action.payload;
    },
    setIsLoading(state) {
      state.isLoading = false;
    },
    setCount(state, action) {
      state.count = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.tickets = [...state.tickets, ...action.payload.tickets];
        state.isStop = action.payload.stop;
      })
      .addCase(fetchTickets.rejected, (state) => {
        state.isError += 1;
      });
  },
});

export const { setIdx, setIsLoading, setCount } = ticketData.actions;
export default ticketData.reducer;
