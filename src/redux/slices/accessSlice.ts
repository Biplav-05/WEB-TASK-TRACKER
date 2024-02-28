import { createSlice } from "@reduxjs/toolkit";

const initialState: AccessState = {
  access_token: "",
  user_profile: null,
};
export const accessSlice = createSlice({
  name: "accessSlice",
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      state.access_token = action.payload;
    },
    setUserProfile: (state, action) => {
      state.user_profile = action.payload;
    },
  },
});
export const { setAuthToken, setUserProfile } = accessSlice.actions;
export default accessSlice.reducer;
