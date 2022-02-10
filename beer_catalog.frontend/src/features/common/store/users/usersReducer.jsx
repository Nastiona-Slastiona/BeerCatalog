import ThunkStatus from 'src/features/common/models/thunkStatus';
import { createSlice } from '@reduxjs/toolkit';
import setUserFavoriteBeers from './state/thunks/usersThunk';


const initialState = {
    isAuthorized: false,
    favoriteBeers: [],
    email: ''
};

const setError = (state, action) => {
    state.status = ThunkStatus.Rejected;
    state.error = action.payload;
};


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUserData(state, action) {
            return {
                ...state,
                authorized: action.payload.authorized,
                email: action.payload.email,
                favoriteBeers: action.payload.favoriteBeers
            };
        },
        setUserFavoriteBeer(state, action) {
            return {
                ...state,
                favoriteBeers: action.payload
            };
        }
    },
    extraReducers: {
        [setUserFavoriteBeers.pending]: state => {
            state.status = ThunkStatus.Loading;
        },
        [setUserFavoriteBeers.fulfilled]: (state, action) => {
            state.favoriteBeers = action.payload.favoriteBeers;
        },
        [setUserFavoriteBeers.rejected]: setError
    }
});

export default usersSlice.reducer;
