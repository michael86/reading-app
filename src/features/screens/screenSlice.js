import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screen: 0,
};

export const groupsSlice = createSlice({
  name: "groups",
  initialState,

  reducers: {},
});

// export const {} = counterSlice.actions;
// export const getLengthGroups = (state) => {
//   console.log(state);
//   return state.groups.length;
// };

export default groupsSlice.reducer;
