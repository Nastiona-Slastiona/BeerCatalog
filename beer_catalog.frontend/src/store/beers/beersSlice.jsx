/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable prefer-destructuring */

import { createSlice } from '@reduxjs/toolkit';
import ThunkStatus from 'models/thunkStatus';
import { fetchBeers, fetchOneBeer, setIsFavoriteBeer } from 'store/beers/state/thunks/thunks';
import favoriteBeerSetted from 'store/reducers/beers/favoriteBeerSetted';


const initialState = {
    beers: [],
    status: '',
    currentPage: 0,
    error: ''
};

const setError = (state, action) => {
    state.status = ThunkStatus.Rejected;
    state.error = action.payload;
};

const beersSlice = createSlice({
    name: 'beers',
    initialState,
    reducers: {
        favoriteBeerSetted
    },
    extraReducers: {
        [fetchBeers.pending]: state => {
            state.status = ThunkStatus.Loading;
        },
        [fetchBeers.fulfilled]: (state, action) => {
            const beers = [...action.payload[0]];

            beers.forEach(beer => {
                beer.isFavorite = false;
            });

            const newBeers = beers.filter(beer => !state.beers.includes(beer));
            state.status = ThunkStatus.Resolved;
            console.log(beers);
            state.beers = [...state.beers, ...newBeers];
            state.currentPage = action.payload[1];
        },
        [fetchBeers.rejected]: setError,
        [fetchOneBeer.pending]: state => {
            state.status = ThunkStatus.Loading;
        },
        [fetchOneBeer.fulfilled]: state => {
            state.status = ThunkStatus.Resolved;
        },
        [fetchOneBeer.rejected]: setError,
        [setIsFavoriteBeer.pending]: state => {
            state.status = ThunkStatus.Loading,
            state.error = null;
        },
        [setIsFavoriteBeer.fulfilled]: state => {
            state.status = ThunkStatus.Resolved;
        },
        [setIsFavoriteBeer.rejected]: setError
    }
});

export default beersSlice.reducer;
