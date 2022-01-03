/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import { configureStore } from '@reduxjs/toolkit';
import beersReducer from 'store/beers/beersSlice.jsx';


export const store = configureStore({
    reducer: {
        beers: beersReducer
    }
});
