import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
  },
  reducers: {
    searchForm: (state, action) => {
      state.query = action.payload;
      //   return action.payload;
    },
  },
});

export const { searchForm } = searchSlice.actions;
export default searchSlice.reducer;
