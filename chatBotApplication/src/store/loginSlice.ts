import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginPage: true as boolean,
  loginToken: null as any
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    $toggleSignUpAndSignIn: (state) => {
      state.isLoginPage = !state.isLoginPage;
    },
  },
});

export const { $toggleSignUpAndSignIn } = loginSlice.actions;

export default loginSlice.reducer;
