import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface AuthState {
  loggedIn: boolean;
}

// Define the initial state using that type
const initialState: AuthState = {
  loggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Log in function, set token from payload here
    logIn: (state: AuthState) => {
      state.loggedIn = true;
    },
    // Log out function, set user state to default here
    logOut: () => {
      return initialState;
    },
  },
});

// Export actions & reducer
export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
