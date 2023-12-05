import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getExpertProfile } from '../../utils/api';

export const initialState = {
  data: {},
  isLoading: false,
  error: null
};

export const fetchProfile = createAsyncThunk(
  'profile/fetchProfile',
  async (id, { rejectWithValue, fulfillWithValue }) => {
    try {
      const data = await getExpertProfile(id);

      if (!(typeof data === 'object')) {
        throw new Error('Ошибка. Данные не получены 404');
      }
      return fulfillWithValue(data); //возвращает пейлоад и записывает в стор
    } catch (error) {
      if (error.status) {
        return rejectWithValue(error);
      }
      return rejectWithValue({ errorMessage: 'Ошибка на стороне сервера' });
    }
  }
);

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: builder => {
    //для запросов
    builder
      .addCase(fetchProfile.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export default profileSlice.reducer;
