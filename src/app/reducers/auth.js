import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    is_logged_in: false,
    user: {},
  },
  reducers: {
    login: (state,action) => {
      console.log(action)
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.is_logged_in = true
    },
    logout: (state) => {
      state.is_logged_in = false
    },
    setUser: (state, action) => {
      state.user = action.payload
    }

  },
})

// Action creators are generated for each case reducer function
export const { login, logout, setUser } = authSlice.actions

export default authSlice.reducer