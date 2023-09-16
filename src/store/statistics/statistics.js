import { createSlice } from "@reduxjs/toolkit";

export const LS_STATISTICS_KEY = "React_My_App_Statictics";

const initialState = JSON.parse(localStorage.getItem(LS_STATISTICS_KEY)) ?? {
  gym: 0,
  pool: 0,
  massage: 0,
};

export const statisticsSlise = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    addStatictic: (state, action) => {
      state[action.payload] += 1;
      localStorage.setItem(LS_STATISTICS_KEY, JSON.stringify(state));
    },
    cleanStatictic: (state) => {
      state.statistics = [];
      localStorage.setItem(LS_STATISTICS_KEY, JSON.stringify(state));
    },
  },
});

export const statisticsActions = statisticsSlise.actions;
export const statisticsReducer = statisticsSlise.reducer;
