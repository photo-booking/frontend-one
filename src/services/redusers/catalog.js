import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  pageSize: 4,
  isButtonShown: true,
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
    saveIsButtonShown(state, { payload }) {
      state.isButtonShown = payload;
    }
  }
});

export default catalogSlice.reducer;
export const catalogActions = catalogSlice.actions;
