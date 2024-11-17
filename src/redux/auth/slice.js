import { createSlice } from "@reduxjs/toolkit";
import { register, login } from "../auth/operations";
// import { register, login } from "./operations"; -> чомусь такий зипис видає помилку
const slice = createSlice({
  name: "user",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) => {
    builder
      //   .addCase(register.pending, (state) => {})
      .addCase(register.fulfilled, (state, action) => {
        state.error = null;
        state.name = action.payload.user.name;
        state.email = action.payload.user.email;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
      })
      //   .addCase(login.pending, (state) => {})
      .addCase(login.fulfilled, (state, action) => {
        state.error = null;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default slice.reducer;
