import { configureStore } from '@reduxjs/toolkit';

import beersReducer from 'store/features/beers/beersSlice.jsx';


export const store = configureStore({
  reducer: {
    beers: beersReducer
  },
});
