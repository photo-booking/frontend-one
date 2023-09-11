import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getUsers } from "../../utils/api";


export const initialState = {
    data: {},
    isLoading: false,
    error: null
}

export const fetchUsers = createAsyncThunk (
    'users/fetchUsers',
    async (_, { rejectWithValue, fulfillWithValue}) => {
        try {
            const data = await getUsers();
            if(!(typeof data === 'object')) {
                throw new Error('Ошибка. Данные не получены 404') 
            }
            return fulfillWithValue(data);                              //возвращает пейлоад и записывает в стор
        }
        catch (error) {
            if(error.status) {
                return rejectWithValue(error);
            }
            return rejectWithValue({errorMessage: 'Ошибка на стороне сервера'});
        }  
    }
)

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {    //для запросов
      builder 
          .addCase(fetchUsers.pending, (state) => {
              state.isLoading = true;
              state.error = null;
          })
          .addCase(fetchUsers.fulfilled, (state, action) => {
              state.isLoading = false;
              state.data = action.payload;
          })
          .addCase(fetchUsers.rejected, (state, action) => {
              state.isLoading = false;
              state.error = action.payload;
          })
    }
  })

  export default usersSlice.reducer;