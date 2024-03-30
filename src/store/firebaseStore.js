import { configureStore } from "@reduxjs/toolkit";
import handleStates from "./handleStates";
import authSlice from "./authSlice";
export const firebaseStore = configureStore({
  reducer: {
    auth: authSlice,
    handleState: handleStates
  }
});
