import ThunkStatus from 'src/features/common/models/thunkStatus';
import { createSlice } from '@reduxjs/toolkit';
import favoriteBeerSet from 'features/common/store/reducers/beers/favoriteBeerSet';
import favoriteBeersSet from 'features/common/store/reducers/beers/favoriteBeersSet';
import fetchBeers from 'features/beersList/store/beersThunk';
import fetchOneBeer from 'features/common/store/beers/state/thunks/fetchBeerThunk';
import setIsFavoriteBeer from 'features/common/store/beers/state/thunks/beerThunk';


const initialState = {
    beersList: [],
    favoritesBeersIds: [],
    favoriteBeers: [],
    selectedBeer: {},
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
        favoriteBeerSet,
        favoriteBeersSet,
        initialStateSet() {
            return {
                ...initialState
            };
        }
    },
    extraReducers: {
        [fetchBeers.pending]: state => {
            state.status = ThunkStatus.Loading;
        },
        [fetchBeers.fulfilled]: (state, action) => {
            const beers = [...action.payload[0]];

            beers.forEach(beer => {
                if (state.favoritesBeersIds.includes(beer.id)) {
                    beer.isFavorite = true;
                } else {
                    beer.isFavorite = false;
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
            if (!beersId.includes(action.payload.id)) {
                if (state.favoritesBeersIds.includes(action.payload.id)) {
                    state.favoriteBeers = [...state.favoriteBeers, action.payload];
                    state.favoriteBeers = state.favoriteBeers.map(beer => {
                        beer.isFavorite = true;

                        return beer;
                    });
                } else {
                    action.payload.isFavorite = false;
                }
            }
            state.selectedBeer = action.payload;
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
