import { configureStore } from '@reduxjs/toolkit';

import beersReducer from '../features/beers/beersSlice.js';
import favoriteBeersReducer from '../features/favoriteBeers/favoriteBeersSlice.js';

export const store = configureStore({
  reducer: {
    beers: beersReducer,
    favoriteBeers: favoriteBeersReducer
  },
});
