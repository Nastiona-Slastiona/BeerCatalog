import ThunkStatus from 'models/thunkStatus';
import { createSlice } from '@reduxjs/toolkit';
import favoriteBeerSetted from 'features/common/store/reducers/beers/favoriteBeerSetted';
import fetchBeers from 'features/beersList/store/beers/state/thunks/thunks';
import setIsFavoriteBeer from 'features/common/store/beers/state/thunks/thunks';


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
