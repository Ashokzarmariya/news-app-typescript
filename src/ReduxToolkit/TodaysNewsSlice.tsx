import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

interface NewsType {
    todaysNews: Object[]
}

const initialState: NewsType = {
    todaysNews: []
}

export const fetchTodaysNews = createAsyncThunk("todaysNews/fetchTodaysNews",
    async () => {
        const res = await axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=798f7494a7c746d58b3b2cccb265c92b")
        
        return res.data.articles;
    }
)

const todaysNewsSlice = createSlice({
    name: 'todaysNews',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(fetchTodaysNews.pending, (state, action) => {
            console.log("todays news pendding",state)
        })
        builder.addCase(fetchTodaysNews.fulfilled, (state, {payload}) => {
            return {...state, todaysNews:payload}
        })
        builder.addCase(fetchTodaysNews.rejected, () => {
            console.log("todays news rejected")
        })
    }

})

export default todaysNewsSlice.reducer;
//import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// interface CounterState {
//   value: {}
// }

// const initialState = {
//     value: {}
// } as CounterState

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment(state) {
// -      state.value={}
//     },
//     decrement(state) {
//       state.value={}
//     },
//     incrementByAmount(state, action: PayloadAction<object>) {
//       state.value = action.payload
//     },
//   },
// })

// export const { increment, decrement, incrementByAmount } = counterSlice.actions
// export default counterSlice.reducer`