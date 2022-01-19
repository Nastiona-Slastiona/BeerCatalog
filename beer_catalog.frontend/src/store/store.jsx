import beersReducer from 'features/common/store/beers/beersReducer';
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
    reducer: {
        beers: beersReducer
    }
});

export default store;
