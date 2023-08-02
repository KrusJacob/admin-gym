import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./users/users.slice";
import { seacrhReducer } from "./search/seach.slice";
import { historyReducer } from "./history/history.slice";
import { statisticsReducer } from "./statistics/statistics";
import { popupReducer } from "./popup/popup.slice";
import { loginReducer } from "./login/login.slice";

import { apiSlice } from "../api/api.slice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    search: seacrhReducer,
    history: historyReducer,
    statictics: statisticsReducer,
    popup: popupReducer,
    login: loginReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});
