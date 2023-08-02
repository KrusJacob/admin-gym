import { createSlice } from "@reduxjs/toolkit";

const LS_HISTORY_KEY = "React_My_App_History";

const initialState = {
  history: JSON.parse(localStorage.getItem(LS_HISTORY_KEY) ?? "[]"),
};

export const historySlise = createSlice({
  name: "history",
  initialState,
  reducers: {
    addHistory: (state, action) => {
      state.history.push(action.payload);
      localStorage.setItem(LS_HISTORY_KEY, JSON.stringify(state.history));
    },
    cleanHistory: (state) => {
      state.history = [];
      localStorage.setItem(LS_HISTORY_KEY, JSON.stringify(state.history));
    },
  },
});

export const historyActions = historySlise.actions;
export const historyReducer = historySlise.reducer;
