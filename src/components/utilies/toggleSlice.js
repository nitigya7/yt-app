// features/toggleDivSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  divsVisible: {
    div1: true,
    div2: true,
  },
};

const toggleDivSlice = createSlice({
  name: "toggleDiv",
  initialState,
  reducers: {
    toggleDiv: (state, action) => {
      const { divId } = action.payload;
      state.divsVisible[divId] = !state.divsVisible[divId];
    },
  },
});

export const { toggleDiv } = toggleDivSlice.actions;
export default toggleDivSlice.reducer;
