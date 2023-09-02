import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import useReducer from "../features/user/UserSlice";
import movieReducer from "../features/user/Movie/MovieSlice";
export default configureStore({
  reducer: {
    user: useReducer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
