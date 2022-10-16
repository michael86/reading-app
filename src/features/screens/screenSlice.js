import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screen: 0,
};

//Screen 0 = landing
//Screen 1 = progress
//Screen 2 = group
//Screen 3 = words

export const screenSlice = createSlice({
  name: "screen",
  initialState,

  reducers: {
    setScreen: (state, action) => {
      state.screen = action.payload;
    },
  },
});

export const { setScreen } = screenSlice.actions;

export default screenSlice.reducer;
