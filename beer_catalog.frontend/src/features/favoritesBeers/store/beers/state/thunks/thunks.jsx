import { createAsyncThunk } from '@reduxjs/toolkit';
import requestHelper from 'src/helpers/requestHelper';


const fetchOneBeer = createAsyncThunk(
    'beers/FetchOneBeer',
    async (input, { rejectWithValue }) => {
        try {
            const data = await requestHelper.get('getSingleBeer', { id: input });

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export default fetchOneBeer;
