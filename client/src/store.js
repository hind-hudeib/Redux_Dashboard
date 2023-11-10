import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./redux/userSlice";
import postsSlice from "./redux/postsSlice";
import commentsSlice from "./redux/commentsSlice";

// Combine the slices into a root reducer object
const rootReducer = {
  users: userSlice,
  comments: commentsSlice,
  posts: postsSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;