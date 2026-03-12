import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JWTPayload } from "@/utils/types";

const initialState = {
  token: "",
  userPayload: null as JWTPayload | null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setPayload: (state, action: PayloadAction<JWTPayload | null>) => {
      state.userPayload = action.payload;
    },
  },
});

export const { setToken, setPayload } = usersSlice.actions;

export default usersSlice.reducer;
