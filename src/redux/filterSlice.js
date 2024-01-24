import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState.filter,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
