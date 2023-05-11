import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
// types
import { DocsInterface, FormType } from "../types";
// service
import { getArticlesearchApi } from "../service";
// constant
import { COUNTRY_TYPE } from "../constant";
// utils
import { toStringByFormatting } from "../utils";

export interface IPostsInStorage {
  data: DocsInterface[] | undefined;
  form: FormType;
  loading: boolean;
  error: string | undefined;
}

type Props = {
  form: FormType;
  page: number;
};

export const formInitialState = {
  keyword: "",
  beginDate: toStringByFormatting(new Date(0), "-"),
  endDate: toStringByFormatting(new Date(), "-"),
  country: COUNTRY_TYPE.all,
};

export const initialState: IPostsInStorage = {
  data: [],
  form: formInitialState,
  loading: false,
  error: undefined,
};

export const getPostsInStorage = createAsyncThunk(
  "posts/getPostsInStorage",
  async (props: Props) => {
    const { form, page } = props;
    return await getArticlesearchApi({ form, page });
  },
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setFormState: (state, action) => {
      state.form = action.payload;
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

export const { setFormState } = postSlice.actions;

export default postSlice.reducer;
