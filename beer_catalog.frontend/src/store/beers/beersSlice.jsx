/* eslint-disable no-sequences */

import { createSlice } from '@reduxjs/toolkit';
import ThunkStatus from 'models/thunkStatus';
import { fetchBeers, setIsFavoriteBeer } from 'store/beers/state/thunks/thunks';
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

            state.status = ThunkStatus.Resolved;
            state.beers = [...state.beers, ...beers];
            state.currentPage = action.payload[1];
        },
        [fetchBeers.rejected]: setError,
        [setIsFavoriteBeer.fulfilled]: state => {
            state.status = ThunkStatus.Resolved;
        },
        [setIsFavoriteBeer.rejected]: setError
    }
});

export default beersSlice.reducer;
