import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayAuthentication: false
};
export const handleStates = createSlice({
  name: "handleState",
  initialState,
  reducers: {
    setDisplayAuthentication: (state, action) => {
      state.displayAuthentication = !state.displayAuthentication;
    }
  }
});

export const { setDisplayAuthentication } = handleStates.actions;
export default handleStates.reducer;
