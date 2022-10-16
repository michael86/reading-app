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
      { letter: "ck", words: ["cat"] },
      { letter: "d", words: ["drum"] },
      { letter: "e", words: ["egg"] },
      { letter: "h", words: ["hop"] },
      { letter: "m", words: ["meal"] },
      { letter: "r", words: ["rag"] },
    ],
    [
      //group 3
      { letter: "b", words: ["bat"] },
      { letter: "f", words: ["fish"] },
      { letter: "g", words: ["gargle"] },
      { letter: "l", words: ["lollipop"] },
      { letter: "o", words: ["on"] },
      { letter: "u", words: ["umbrella"] },
    ],
    [
      //group 4
      { letter: "ai", words: ["pain"] },
      { letter: "ee", words: ["bee"] },
      { letter: "ie", words: ["tie"] },
      { letter: "j", words: ["jam"] },
      { letter: "oa", words: ["goat"] },
      { letter: "or", words: ["fork"] },
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
