import { createAsyncThunk } from '@reduxjs/toolkit';
import requestHelper from 'src/helpers/requestHelper';


const fetchBeers = createAsyncThunk(
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

export default fetchBeers;
