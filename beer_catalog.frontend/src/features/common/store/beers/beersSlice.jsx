import ThunkStatus from 'models/thunkStatus';
import { createSlice } from '@reduxjs/toolkit';
import favoriteBeerSetted from 'features/common/store/reducers/beers/favoriteBeerSetted';
import fetchBeers from 'features/beersList/store/beers/state/thunks/thunks';
import fetchOneBeer from 'features/favoritesBeers/store/beers/state/thunks/thunks';
import serviceKeys from 'src/constants/serviceKeys';
import setIsFavoriteBeer from 'features/common/store/beers/state/thunks/thunks';
import storageHelper from 'src/helpers/storageHelper';


const initialState = {
    beersList: [],
    favoritesBeersIds: storageHelper.getItem(serviceKeys.favoriteBeersIds),
    favoriteBeers: [],
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
                if (!state.favoritesBeersIds.includes(beer.id)) {
                    beer.isFavorite = false;
                } else {
                    beer.isFavorite = true;
                }
            });

            state.status = ThunkStatus.Resolved;
            state.beersList = [...state.beersList, ...beers];
            state.currentPage = action.payload[1];
        },
        [fetchOneBeer.rejected]: setError,
        [fetchOneBeer.pending]: state => {
            state.status = ThunkStatus.Loading;
        },
        [fetchOneBeer.fulfilled]: (state, action) => {
            const beersId = state.favoriteBeers.map(beer => beer.id);
            if (!beersId.includes(action.payload[0].id)) {
                state.favoriteBeers = [...state.favoriteBeers, ...action.payload];
                state.favoriteBeers = state.favoriteBeers.map(beer => {
                    beer.isFavorite = true;

                    return beer;
                });
            }
            state.status = ThunkStatus.Resolved;
        },
        [fetchOneBeer.rejected]: setError,
        [setIsFavoriteBeer.fulfilled]: state => {
            state.status = ThunkStatus.Resolved;
        },
        [setIsFavoriteBeer.rejected]: setError
    }
});

export default beersSlice.reducer;
