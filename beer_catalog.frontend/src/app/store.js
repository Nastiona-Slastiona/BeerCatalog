import { configureStore } from '@reduxjs/toolkit';

import beersReducer from '../features/beers/beersSlice.js';

export const store = configureStore({
  reducer: {
    beers: beersReducer
  },
});
