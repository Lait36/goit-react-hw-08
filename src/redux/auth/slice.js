import { createSlice } from "@reduxjs/toolkit";
import { register, login, logOut } from "../auth/operations";

const slice = createSlice({
  name: "auth",
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
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logOut.pending, (state) => {
        state.loading = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.token = null;
      });
  },
});

export default slice.reducer;
