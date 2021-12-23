import { configureStore } from '@reduxjs/toolkit';

import beersReducer from 'Store/features/beers/beersSlice.jsx';


export const store = configureStore({
  reducer: {
    beers: beersReducer
  },
});
