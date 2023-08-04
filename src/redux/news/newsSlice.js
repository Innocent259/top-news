import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
    try {
        const response = await axios.get('https://content.guardianapis.com/search?api-key=c137b184-3876-4c27-91f3-4e057637ef0c')  
        return response.data
    }
    catch(err) {
        console.log(err);
    } 
}) 

const initialState = {
  newsData: [],
  isLoading: false,
};
const newsSlice = createSlice({
    name: 'news',
    initialState,
    extraReducers: (builder) => {
        builder
          .addCase(fetchNews.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(fetchNews.fulfilled, (state, action) => {
            state.isLoading = false;
            const data = action.payload;
            state.newsData = action.payload;
            console.log(data)
            state.newsData = data.response.results;
          })
          .addCase(fetchNews.rejected, (state) => {
            state.isLoading = false;
          }); 
    }
}) 
export const { newDetails, noNewsDetails } = newsSlice.actions;
export default newsSlice.reducer;