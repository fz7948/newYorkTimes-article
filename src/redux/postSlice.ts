import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
// types
import { DocsInterface, FormType } from "../types";
// service
import { getArticlesearchApi } from "../service";

export interface IPostsInStorage {
  data: DocsInterface[] | undefined;
  loading: boolean;
  error: string | undefined;
}

export const initialState: IPostsInStorage = {
  data: [],
  loading: false,
  error: undefined,
};

export const getPostsInStorage = createAsyncThunk(
  "posts/getPostsInStorage",
  async (form: FormType) => {
    return await getArticlesearchApi(form);
  },
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setProductCheck: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [getPostsInStorage.pending.type]: (state) => {
      state.loading = true;
    },
    [getPostsInStorage.fulfilled.type]: (
      state,
      action: PayloadAction<DocsInterface[]>,
    ) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getPostsInStorage.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setProductCheck } = postSlice.actions;

export default postSlice.reducer;
