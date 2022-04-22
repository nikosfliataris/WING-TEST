import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  User: null,
};

const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    login: (state, action) => {
      state.User = action.payload;
    },
    logout: (state, action) => {
      state.User = action.payload;
    },
  },
});

export const { login, logout } = UserSlice.actions;

export default UserSlice.reducer;
