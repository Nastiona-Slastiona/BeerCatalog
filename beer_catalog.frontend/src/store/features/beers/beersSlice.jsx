import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkStatus } from 'Models/ThunkStatus/thunkStatus.jsx';


const initialState = {
    beers: [],
    status: '',
    currentPage: 1,
    error: ''
};

export const setIsFavoriteBeer = createAsyncThunk(
    'favoriteBeers/setIsFavoriteBeer',
    async function(beer, {rejectWithValue, dispatch}) {
        const newBeer = {
            ...beer,
            isFavorite: !beer.isFavorite
        }

        try {
            dispatch(favoriteBeerSetted(newBeer));
        } catch (error) {
            return rejectWithValue(error.message());
        }
    }
);

export const fetchBeers = createAsyncThunk(
    'beers/FetchBeers',
    async function(input, {rejectWithValue}) {
        try {
            const response = await fetch(input[0]);
    
            if (!response.ok) {
                throw new Error('ServerError');
            }

            const beers = await response.json();
            
            return [ beers, input[1] ];
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

const setError = (state, action) => {
    state.status = ThunkStatus.Rejected;
    state.error = action.payload;
};

const beersSlice = createSlice({
    name: 'beers',
    initialState,
    reducers: {
        favoriteBeerSetted(state, action) {
            return {
                ...state,
                beers: state.beers.map(beer => {
                    if (beer.id !== action.payload.id) {
                        return beer;
                    }
                 
                    return {
                        ...beer,
                        isFavorite: !beer.isFavorite,
                    }
                }),
            }
        }
    },
    extraReducers: {
        [fetchBeers.pending]: (state) => {
            state.status = ThunkStatus.Loading;
        },
        [fetchBeers.fulfilled]: (state, action) => {
            const beers = Object.assign(action.payload[0]);
            
            for(let key in beers) {
                beers[key].isFavorite = false;
            }
            
            const newBeers = beers.filter(beer => !state.beers.includes(beer))
            state.status = ThunkStatus.Resolved;
            state.beers = [ ...state.beers, ...newBeers ];
            state.currentPage = action.payload[1];
        },
        [fetchBeers.rejected]: setError,
        [setIsFavoriteBeer.pending]: (state) => {
            state.status = ThunkStatus.Loading,
            state.error = null
        },
        [setIsFavoriteBeer.fulfilled]: (state) => {
            state.status = ThunkStatus.Resolved
        },
        [setIsFavoriteBeer.rejected]: setError,
    }
});

const { favoriteBeerSetted } = beersSlice.actions;

export default beersSlice.reducer;