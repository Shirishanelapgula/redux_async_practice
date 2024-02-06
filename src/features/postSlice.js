import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  postData: [],
  error: "",
};

export const fetchPost = createAsyncThunk("post/fetchPost", () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => response.data);
});

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.loading = false;
      state.postData = action.payload;
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});


export default postSlice.reducer;
