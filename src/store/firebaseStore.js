import { configureStore } from "@reduxjs/toolkit";
import handleStates from "./handleStates";
import authSlice from "./authSlice";
import postSlice from "./postSlice";
import searchResultSlice from "./searchResultSlice";
export const firebaseStore = configureStore({
  reducer: {
    auth: authSlice,
    handleState: handleStates,
    postSlice: postSlice,
    searchResult: searchResultSlice
  }
});
