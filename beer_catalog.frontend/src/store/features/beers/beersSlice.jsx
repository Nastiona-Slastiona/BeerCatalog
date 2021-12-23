import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkStatus } from 'Models/ThunkStatus/thunkStatus.jsx';


const initialState = {
    beers: [],
    status: '',
    error: ''
};

export const setIsFavoriteBeer = createAsyncThunk(
    'favoriteBeers/setIsFavoriteBeer',
    async function(beer, {rejectWithValue, dispatch}) {
        const favorite = {
            ...beer,
            isFavorite: !beer.isFavorite
        }

        try {
            // const response = await fetch('https://api.punkapi.com/v2/beers/${id}', {
            //     method: 'PATCH',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         isFavorite: !beer.isFavorite,
            //     })
            // });

            // if (!response.ok) {
            //     throw new Error('ServerError on setting beer\'s isFavorite property');
            // }

            dispatch(isFavoriteBeerSetted(favorite));
        } catch (error) {
            return rejectWithValue(error.message());
        }
    }
);

export const fetchBeers = createAsyncThunk(
    'beers/FetchBeers',
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch('https://api.punkapi.com/v2/beers');
    
            if (!response.ok) {
                throw new Error('ServerError');
            }
    
            const data = await response.json();
            return data;
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
        isFavoriteBeerSetted(state, action) {
            return {
                ...state,
                beers: state.beers.map(beer => {
                    if (beer.id !== action.payload.id) {
                        return beer;
                    }
                  
                    return {
                        ...beer,
                        isFavorite: !beer.isFavorite
                    }
                })
            }
        }
    },
    extraReducers: {
        [fetchBeers.pending]: (state) => {
            state.status = ThunkStatus.Loading;
        },
        [fetchBeers.fulfilled]: (state, action) => {
            state.status = ThunkStatus.Resolved;
            const beers = Object.assign(action.payload);
            for(let key in beers) {
                beers[key].isFavorite = false;
            }
            state.beers = beers;
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

const { isFavoriteBeerSetted } = beersSlice.actions;

export default beersSlice.reducer;