import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import groupReducer from "../features/groups/groupsSlice";
import screenReducer from "../features/screens/screenSlice";
import progressReducer from "../features/progress/progressSlice";
import currentLessonSlice from "../features/currentLesson/currentLesson";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    groups: groupReducer,
    screen: screenReducer,
    progress: progressReducer,
    currentLesson: currentLessonSlice,
  },
});
