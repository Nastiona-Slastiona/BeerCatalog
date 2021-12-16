import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    beers: []
};

const beersSlice = createSlice({
    name: 'beers',
    initialState,
    reducers: {}
});

export default beersSlice.reducer;