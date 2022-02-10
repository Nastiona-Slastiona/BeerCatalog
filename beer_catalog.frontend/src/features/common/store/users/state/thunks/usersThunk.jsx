import { createAsyncThunk } from '@reduxjs/toolkit';
import serviceUrls from 'src/constants/serviceUrls';


const setUserFavoriteBeers = createAsyncThunk(
    'users/setUserFavoriteBeers',
    async user => {
        const favoriteBeers = user.favoriteBeers.join(' ');
        const email = user.email;

        const response = await fetch(serviceUrls.setFavoriteBeers, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                favoriteBeers
            })
        });

        if (response.ok) {
            return user.favoriteBeers;
        }

        // try {
        //     dispatch({ type: 'users/setUserFavoriteBeers', payload: user.favoriteBeers });
        // } catch (error) {
        //     return rejectWithValue(error.message());
        // }
    }
);

export default setUserFavoriteBeers;
