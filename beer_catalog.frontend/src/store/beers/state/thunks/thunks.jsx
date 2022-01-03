/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */

import { createAsyncThunk } from '@reduxjs/toolkit';
import serviceUrls from 'src/constants/serviceUrls';
import urlHelper from 'src/helpers/urlHelper';


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
            const url = urlHelper.getUrlByTemplate(serviceUrls.getLimittedBeers, { currPage: input, page: 12 });

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('ServerError');
            }

            const data = await response.json();

            return [data, input];
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
