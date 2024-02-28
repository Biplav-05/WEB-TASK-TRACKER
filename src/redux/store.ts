import { configureStore } from "@reduxjs/toolkit";
import accessSlice from "./slices/accessSlice";
export const task_tracker_store = configureStore({
  reducer: { accessSlice },
});
