import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  groups: [
    [
      //group 1
      { letter: "a", words: ["ant"] },
      { letter: "i", words: ["ink"] },
      { letter: "n", words: ["net"] },
      { letter: "p", words: ["puff"] },
      { letter: "s", words: ["snake"] },
      { letter: "t", words: ["tennis"] },
    ],
    [
      //group 2
      { letter: "a", words: ["ant"] },
      { letter: "i", words: ["ink"] },
      { letter: "n", words: ["net"] },
      { letter: "p", words: ["puff"] },
      { letter: "s", words: ["snake"] },
      { letter: "t", words: ["tennis"] },
    ],
    [
      //group 3
      { letter: "a", words: ["ant"] },
      { letter: "i", words: ["ink"] },
      { letter: "n", words: ["net"] },
      { letter: "p", words: ["puff"] },
      { letter: "s", words: ["snake"] },
      { letter: "t", words: ["tennis"] },
    ],
    [
      //group 4
      { letter: "a", words: ["ant"] },
      { letter: "i", words: ["ink"] },
      { letter: "n", words: ["net"] },
      { letter: "p", words: ["puff"] },
      { letter: "s", words: ["snake"] },
      { letter: "t", words: ["tennis"] },
    ],
    [
      //group 5
      { letter: "a", words: ["ant"] },
      { letter: "i", words: ["ink"] },
      { letter: "n", words: ["net"] },
      { letter: "p", words: ["puff"] },
      { letter: "s", words: ["snake"] },
      { letter: "t", words: ["tennis"] },
    ],
    [
      //group 6
      { letter: "a", words: ["ant"] },
      { letter: "i", words: ["ink"] },
      { letter: "n", words: ["net"] },
      { letter: "p", words: ["puff"] },
      { letter: "s", words: ["snake"] },
      { letter: "t", words: ["tennis"] },
    ],
    [
      //group 7
      { letter: "a", words: ["ant"] },
      { letter: "i", words: ["ink"] },
      { letter: "n", words: ["net"] },
      { letter: "p", words: ["puff"] },
      { letter: "s", words: ["snake"] },
      { letter: "t", words: ["tennis"] },
    ],
  ],
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
