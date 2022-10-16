import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  progress: [0],
};

export const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    levelCompleted: (state, action) => {
      state.progress.push(action.payload);
    },
  },
});

// export const {} = counterSlice.actions;
// export const getLengthGroups = (state) => {
//   console.log(state);
//   return state.groups.length;
// };

export const { levelCompleted } = progressSlice.actions;

export default progressSlice.reducer;
