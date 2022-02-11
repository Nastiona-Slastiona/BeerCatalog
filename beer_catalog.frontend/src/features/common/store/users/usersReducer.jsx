import ThunkStatus from 'src/features/common/models/thunkStatus';
import { createSlice } from '@reduxjs/toolkit';
import setUserFavoriteBeers from './state/thunks/usersThunk';


const initialState = {
    isAuthorized: false,
    email: '',
    status: ''
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
                isAuthorized: action.payload.authorized,
                email: action.payload.email
            };
        }
    },
    extraReducers: {
        [setUserFavoriteBeers.pending]: state => {
            state.status = ThunkStatus.Loading;
        },
        [setUserFavoriteBeers.fulfilled]: state => {
            state.status = ThunkStatus.Resolved;
        },
        [setUserFavoriteBeers.rejected]: setError
    }
});

export default usersSlice.reducer;
