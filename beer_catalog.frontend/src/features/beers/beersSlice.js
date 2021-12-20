import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';



const initialState = {
    beers: [],
    status: '',
};

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
    state.status = 'rejected';
    state.error = action.payload;
};

const beersSlice = createSlice({
    name: 'beers',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchBeers.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchBeers.fulfilled]: (state,action) => {
            state.status = 'resolved';
            const beers = Object.assign(action.payload);
            for(let key in beers) {
                beers[key].isFavorite = false;
            }
            state.beers = beers;
        },
        [fetchBeers.rejected]: setError,
    }
});

export default beersSlice.reducer;