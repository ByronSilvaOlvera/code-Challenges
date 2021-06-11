import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value : 0,
    texto1: '',
    texto2: '',
    texto3: '',
  },
  reducers: {
    increment: (state) => {
      state.value += 1
      if(state.value === 3){
        state.value = 0;
      }
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer