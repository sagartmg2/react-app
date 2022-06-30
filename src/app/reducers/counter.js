import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment(state, action) {
      console.log(action)
      state.value = state.value + 1
    }
    ,
    decrement(state, action) {
      state.value = state.value - 1

    }
  },
})

export const delayIncrement = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  }
}

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer