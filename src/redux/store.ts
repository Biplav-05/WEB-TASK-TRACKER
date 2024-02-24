import { configureStore } from "@reduxjs/toolkit";
import accessSlice from "./slices/accessSlice";
export const taskTrackerStore = configureStore({
  reducer: { accessSlice },
});
