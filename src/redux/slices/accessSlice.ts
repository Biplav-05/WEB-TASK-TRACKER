import { createSlice } from "@reduxjs/toolkit";

const initialState: AccessState = {
  accessToken: "",
  userProfile: null,
};
export const accessSlice = createSlice({
  name: "accessSlice",
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});
export const { setAuthToken, setUserProfile } = accessSlice.actions;
export default accessSlice.reducer;
