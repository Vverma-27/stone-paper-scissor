import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { initialState } from "./user.interfaces";

const userSlice = createSlice({
  name: "userslice",
  initialState,
  reducers: {
    setUsername: (state, payload: PayloadAction<string>) => {
      state.username = payload.payload;
    },
  },
});

export const { setUsername } = userSlice.actions;

export default userSlice.reducer;
