import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  pageSize: 4,
  limit: 1,
  isLoading: false,
  error: null
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    savePageSize(state, { payload }) {
      state.pageSize = payload;
    },
    saveLimit(state, { payload }) {
      state.limit = payload;
    }
  }
});

export default catalogSlice.reducer;
export const catalogActions = catalogSlice.actions;
