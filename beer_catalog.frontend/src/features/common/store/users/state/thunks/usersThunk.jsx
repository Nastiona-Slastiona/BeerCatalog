import { createAsyncThunk } from '@reduxjs/toolkit';
import serviceUrls from 'src/constants/serviceUrls';


const setUserFavoriteBeers = createAsyncThunk(
    'users/setUserFavoriteBeers',
    async user => {
        const favoriteBeers = user.favoriteBeers.join(' ');
        const email = user.email;

        await fetch(serviceUrls.setFavoriteBeers, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                favoriteBeers
            })
        });
    }
);

export default setUserFavoriteBeers;
