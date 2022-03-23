import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { news } from "../modle/modle";

const initialState = {
    category:[]
}

export const fetchCategoryNews = createAsyncThunk("category/fetchCategoryNews",
    async (categorys:string | unknown) => {
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?category=${categorys}&apiKey=798f7494a7c746d58b3b2cccb265c92b`)
        //console.log("category",res.data.articles)
        return res.data.articles
})

const CategorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [fetchCategoryNews.pending.toString()]: () => {
            console.log("categorys news penddings")
        },
        [fetchCategoryNews.fulfilled.toString()]: (state, { payload }: news) => {
            return { ...state, category: payload }
        }
    }
});

export default CategorySlice.reducer;