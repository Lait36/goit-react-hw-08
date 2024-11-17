import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const register = createAsyncThunk(
  "auth/register",
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", newUser);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      return response.data;
    } catch {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    const response = await axios.post("/users/login", user);
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.token}`;
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue();
  }
});

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await axios.post("/users/logout");
    return response.data;
  } catch (error) {
    axios.defaults.headers.common["Authorization"] = "";
    return thunkAPI.rejectWithValue();
  }
});
