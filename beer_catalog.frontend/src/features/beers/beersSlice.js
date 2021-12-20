import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    beers: [
        // {
        //     image_url:'image',
        //     name:'beer',
        //     tagline: 'tagline_beer',
        //     description: 'description_beer',

        // }
    ]
};

const beersSlice = createSlice({
    name: 'beers',
    initialState,
    reducers: {}
});

export default beersSlice.reducer;