import { createAsyncThunk } from '@reduxjs/toolkit';
import requestHelper from 'src/helpers/requestHelper';


export const setIsFavoriteBeer = createAsyncThunk(
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

export const fetchBeers = createAsyncThunk(
    'beers/FetchBeers',
    async (input, { rejectWithValue }) => {
        try {
            const data = await requestHelper.get('getLimittedBeers', { currPage: input, page: 12 });

            return [data, input];
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
