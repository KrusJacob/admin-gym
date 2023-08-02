import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  term: "",
};

export const searchSlise = createSlice({
  name: "search",
  initialState,
  reducers: {
    termChange: (state, action) => {
      state.term = action.payload;
    },
  },
});

export const searchActions = searchSlise.actions;
export const seacrhReducer = searchSlise.reducer;
