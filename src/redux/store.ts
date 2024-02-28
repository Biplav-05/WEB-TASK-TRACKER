import { configureStore } from "@reduxjs/toolkit";
import accessSlice from "./slices/accessSlice";
export const TaskTrackerStore = configureStore({
  reducer: { accessSlice },
});
