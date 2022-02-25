import beersReducer from 'features/common/store/beers/beersReducer';
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from 'features/common/store/users/usersReducer';


const store = configureStore({
    reducer: {
        beers: beersReducer,
        users: usersReducer
    }
});

export default store;
