import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addPhotoToPortfolio } from '../../utils/api';


const initialState = {
    isLoading: false,
    mediafiles: {},
    error: null,
}

export const fetchAddPhotoToPortfolio = createAsyncThunk(  
    'portfolio/fetchAddPhotoToPortfolio', 
    async ({ result, type, jwt, name }, { rejectWithValue, fulfillWithValue }) => {  
        try {
            const data = await addPhotoToPortfolio(result, type, jwt, name);
            console.log(data, 'djjdjdjdjdjddjjd');
            if (!(typeof data === 'object')) {
                console.log('7777777777');
              throw new Error('Ошибка. Данные не отправлены 404');
            }
            console.log(data, '00000000000000');
            return fulfillWithValue(data); //возвращает пейлоад и записывает в стор
          } catch (error) {
            if (error.status) {
              return rejectWithValue(error);
            }
            return rejectWithValue({ errorMessage: 'Ошибка на стороне сервера' });
          }  
    }
)

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {},
    extraReducers: builder => {
      //для запросов
      builder
        .addCase(fetchAddPhotoToPortfolio.pending, (state) => {
          state.isLoading = true;
          console.log('----------------');
          state.error = null;
        })
        .addCase(fetchAddPhotoToPortfolio.fulfilled, (state, action) => {
          state.isLoading = false;
          console.log('+++++++++++++++');
          state.mediafiles = action.payload;
        })
        .addCase(fetchAddPhotoToPortfolio.rejected, (state, action) => {
          state.isLoading = false;
          console.log('============');
          state.error = action.payload;
        });
    }
  });
  
  export default portfolioSlice.reducer;