import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signin: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    signup: (state, action) => {
      state.status = false;
      state.userData = null;
    }
  }
});
export const { signin, signup } = authSlice.actions;
export default authSlice.reducer;
