import { createAsyncThunk } from '@reduxjs/toolkit';


const setIsFavoriteBeer = createAsyncThunk(
    'favoriteBeers/setIsFavoriteBeer',
    async (beer, { rejectWithValue, dispatch }) => {
        const newBeer = {
            ...beer,
            isFavorite: !beer.isFavorite
        };

        try {
            dispatch({ type: 'beers/favoriteBeerSetted', payload: newBeer });
        } catch (error) {
            return rejectWithValue(error.message());
        }
    }
);

export default setIsFavoriteBeer;
