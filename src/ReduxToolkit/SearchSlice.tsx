import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { news } from "../modle/modle";

const initialState= {
  searchResult:[]
}

export const fetchSearchNews = createAsyncThunk("searchResult/fechSearchNews",
  async (keyword:string | undefined) => {
    const res = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=798f7494a7c746d58b3b2cccb265c92b`)
    
    return res.data.articles;
  }
  
)

const searchSlice = createSlice({
  name: 'searchResult',
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [fetchSearchNews.pending.toString()]: () => {
      
    },
    [fetchSearchNews.fulfilled.toString()]: (state,{payload}:news) => {
      return {...state, searchResult:payload}
    }
  }
  

})

export default searchSlice.reducer;