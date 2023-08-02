import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: 1, name: "Ann", surname: "Evans", abonnementCount: 0 },
    { id: 2, name: "John", surname: "Gibson", abonnementCount: 2 },
    { id: 3, name: "Tom", surname: "Collins", abonnementCount: 0 },
    { id: 4, name: "Bob", surname: "Barlow", abonnementCount: 5 },
    { id: 5, name: "Alisa", surname: "Adams", abonnementCount: 0 },
    { id: 6, name: "Liza", surname: "Campbell", abonnementCount: 10 },
    { id: 7, name: "Chen", surname: "Grant", abonnementCount: 0 },
    { id: 8, name: "Milana", surname: "Mills", abonnementCount: 3 },
    { id: 9, name: "Alisanna", surname: "Gilbert", abonnementCount: 0 },
    { id: 10, name: "Mira", surname: "Florence", abonnementCount: 10 },
    { id: 11, name: "Gven", surname: "Higgins", abonnementCount: 0 },
    { id: 12, name: "Milana", surname: "Brooks", abonnementCount: 3 },
    { id: 13, name: "Tommi", surname: "Jackson", abonnementCount: 2 },
    { id: 14, name: "Bob", surname: "Martin", abonnementCount: 5 },
    { id: 15, name: "Alisa", surname: "Mills", abonnementCount: 0 },
    { id: 16, name: "Liza", surname: "Oliver", abonnementCount: 5 },
    { id: 17, name: "Melia", surname: "Adams", abonnementCount: 0 },
    { id: 18, name: "Bernes", surname: "Brooks", abonnementCount: 3 },
    { id: 19, name: "Amy", surname: "Bell", abonnementCount: 2 },
    { id: 20, name: "Krus", surname: "Miller", abonnementCount: 10 },
  ],
};

const LS_USERS_KEY = "ruk";

export const usersSlise = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersFetch: (state, action) => {},
    userCreate: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem(LS_USERS_KEY, JSON.stringify(state.users));
    },
    userRemove: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
      localStorage.setItem(LS_USERS_KEY, JSON.stringify(state.users));
    },
    changeAbonnementCount: (state, action) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload) {
          user.abonnementCount--;
        }
        return user;
      });
    },
  },
});

export const userActions = usersSlise.actions;
export const usersReducer = usersSlise.reducer;
