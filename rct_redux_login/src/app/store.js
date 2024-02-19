import { configureStore } from '@reduxjs/toolkit';
import fourSlice from '../features/counter/fourSlice';
import loginSlice from '../features/counter/loginSlice';
import djangoLoginSlice from '../features/counter/djangoLoginSlice';

export const store = configureStore({
  reducer: {
    four: fourSlice,
    login: loginSlice,
    django: djangoLoginSlice,
  },
});
