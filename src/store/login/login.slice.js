import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
};

export const loginDetails = {
  login: "admin",
  password: "1234",
};

export const loginSlise = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginON: (state) => {
      state.login = true;
    },
    loginOFF: (state) => {
      state.login = false;
    },
  },
});

export const loginActions = loginSlise.actions;
export const loginReducer = loginSlise.reducer;
