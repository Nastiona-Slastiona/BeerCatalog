import { configureStore } from '@reduxjs/toolkit';

import beersReducer from 'Store/features/beers/beersSlice.jsx';
import favoriteBeersReducer from 'Store/features/favoriteBeers/favoriteBeersSlice.jsx';

export const store = configureStore({
  reducer: {
    beers: beersReducer,
    favoriteBeers: favoriteBeersReducer
  },
});
