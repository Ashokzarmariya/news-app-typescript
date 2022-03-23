import { configureStore } from '@reduxjs/toolkit'
import  CategorySlice  from './CategorySlice';
import SearchSlice from './SearchSlice';
import TodaysNewsSlice from './TodaysNewsSlice';

export const store = configureStore({
    reducer: {
        TodaysNews: TodaysNewsSlice,
        SearchResults: SearchSlice,
        Categorys:CategorySlice,
    }
});


export type RootState = ReturnType<typeof store.getState>
//export type RootState = ReturnType<typeof store.getState>

//export default store;