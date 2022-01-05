import beersReducer from 'features/common/store/beers/beersSlice';
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
    reducer: {
        beers: beersReducer
    }
});

export default store;
