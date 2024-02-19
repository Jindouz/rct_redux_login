import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './fourAPI';

const initialState = {
  value: 0,
  status: 'idle',
};

export const incrementAsync = createAsyncThunk(
  'four/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    // If "fulfilled" return the response data
    return response.data;
  }
)
export const fourSlice = createSlice({
  name: 'four',
  initialState,
  reducers: {
    addFour: (state) => {
      state.value += 4;
    },
    subFour: (state) => {
      state.value -= 4;
    },
    incrementByAmount: (state, action) => {
      const { first, second } = action.payload;
      state.value = `${first} + ${second} = ` + parseInt(first) + parseInt(second);
    },
  },


  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'loading complete';
        state.value = action.payload + ' is the bigger number';
      });
  },
});

export const { addFour, subFour,incrementByAmount } = fourSlice.actions;
export const selectMyCount = (state) => state.four.value;
export const selectMyStatus = (state) => state.four.status;

export default fourSlice.reducer;
