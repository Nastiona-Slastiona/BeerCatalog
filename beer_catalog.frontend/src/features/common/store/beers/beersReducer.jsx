import ThunkStatus from 'src/store/thunkStatus';
import { createSlice } from '@reduxjs/toolkit';
import favoriteBeerSet from 'features/common/store/reducers/beers/favoriteBeerSet';
import fetchBeers from 'features/beersList/store/beersThunk';
import setIsFavoriteBeer from 'features/common/store/beers/state/thunks/thunks';


const initialState = {
    beersList: [],
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
        favoriteBeerSet
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
            state.beersList = [...state.beersList, ...beers];
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
