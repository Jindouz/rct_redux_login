import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login } from './djangoAPI';

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

export const loginAsync = createAsyncThunk(
  'django/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await login(credentials);
      localStorage.setItem('access-token', response.access);
      localStorage.setItem('refresh-token', response.refresh);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const djangoSlice = createSlice({
  name: 'django',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state) => {
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default djangoSlice.reducer;
