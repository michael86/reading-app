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
      { letter: "ck", words: ["ant"] },
      { letter: "d", words: ["ink"] },
      { letter: "e", words: ["net"] },
      { letter: "h", words: ["puff"] },
      { letter: "m", words: ["snake"] },
      { letter: "r", words: ["tennis"] },
    ],
    [
      //group 3
      { letter: "b", words: ["ant"] },
      { letter: "f", words: ["ink"] },
      { letter: "g", words: ["net"] },
      { letter: "l", words: ["puff"] },
      { letter: "o", words: ["snake"] },
      { letter: "u", words: ["tennis"] },
    ],
    [
      //group 4
      { letter: "ai", words: ["ant"] },
      { letter: "ee", words: ["ink"] },
      { letter: "ie", words: ["net"] },
      { letter: "j", words: ["puff"] },
      { letter: "oa", words: ["snake"] },
      { letter: "or", words: ["tennis"] },
    ],
    [
      //group 5
      { letter: "book", words: ["ant"] },
      { letter: "moon", words: ["ink"] },
      { letter: "ng", words: ["net"] },
      { letter: "v", words: ["puff"] },
      { letter: "w", words: ["snake"] },
      { letter: "z", words: ["tennis"] },
    ],
    [
      //group 6
      { letter: "ch", words: ["ant"] },
      { letter: "sh", words: ["ink"] },
      { letter: "this", words: ["net"] },
      { letter: "three", words: ["puff"] },
      { letter: "x", words: ["snake"] },
      { letter: "y", words: ["tennis"] },
    ],
    [
      //group 7
      { letter: "ar", words: ["ant"] },
      { letter: "er", words: ["ink"] },
      { letter: "oi", words: ["net"] },
      { letter: "ou", words: ["puff"] },
      { letter: "qu", words: ["snake"] },
      { letter: "ue", words: ["tennis"] },
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
