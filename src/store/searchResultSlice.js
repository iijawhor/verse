import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResult: []
};

export const searchResultSlice = createSlice({
  initialState,
  name: "searchResult",
  reducers: {
    setSearchResult: (state, action) => {
      state.searchResult = action.payload;
    }
  }
});

export const { setSearchResult } = searchResultSlice.actions;
export default searchResultSlice.reducer;
