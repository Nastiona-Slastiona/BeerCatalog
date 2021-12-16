import { createSlice } from '@reduxjs/toolkit';

const InitialState = [
    
];

const beersSlice = createSlice({
    name: 'beers',
    initialState,
    reducers: {}
});

export default beersSlice.reducer;