import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popup: false,
  item: {},
};

export const popupSlise = createSlice({
  name: "popup",
  initialState,
  reducers: {
    showPupup: (state, action) => {
      state.popup = true;
      state.item = action.payload;
    },
    hidePupup: (state) => {
      state.popup = false;
    },
  },
});

export const popupActions = popupSlise.actions;
export const popupReducer = popupSlise.reducer;
