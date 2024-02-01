import { createSlice } from '@reduxjs/toolkit';
// import { addPhotoToPortfolio } from '../../utils/api';


const initialState = {
    mediafiles: [],
}


export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    createPortfolio: (state, action) => {  
      state.mediafiles = state.mediafiles.concat(action.payload)
    }
  }
})

export const { createPortfolio  } = portfolioSlice.actions;
export default portfolioSlice.reducer;