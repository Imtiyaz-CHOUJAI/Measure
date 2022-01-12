import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./store/measurementSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
