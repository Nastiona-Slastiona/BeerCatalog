import beerMapper from 'features/favoritesBeers/mapper/beerMapper';
import { createAsyncThunk } from '@reduxjs/toolkit';
import requestHelper from 'src/helpers/requestHelper';
import serviceUrls from 'src/constants/serviceUrls';
import urlHelper from 'src/helpers/urlHelper';


const fetchOneBeer = createAsyncThunk(
    'beers/FetchOneBeer',
    async (input, { rejectWithValue }) => {
        try {
            const url = urlHelper.getUrlByTemplate(
                serviceUrls.getSingleBeer,
                { id: input }
            );
            const data = await requestHelper.get(url);

            return beerMapper(...data);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export default fetchOneBeer;
