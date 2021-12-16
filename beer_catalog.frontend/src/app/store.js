import { configureStore } from '@reduxjs/toolkit';

import beersReducer from '../features/beers/beersSlice';

export const store = configureStore({
  reducer: {
    beers: beersReducer
  },
});
