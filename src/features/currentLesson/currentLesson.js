import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentLesson: 0, //If get time, set to pull from local storage and set to next lesson
};

export const currentLessonSlice = createSlice({
  name: "currentLesson",
  initialState,

  reducers: {
    setCurrentLesson: (state, action) => {
      state.currentLesson = action.payload;
    },
  },
});

export const { setCurrentLesson } = currentLessonSlice.actions;

export default currentLessonSlice.reducer;
