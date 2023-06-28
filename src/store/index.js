import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({ // Slice of our global state
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++; //creatSlice allows manipulating an existing state, it detects code like this and automatically clone the object and overwritte the original state then
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload; //payload is reduxtoolkit name of the property we are dispatching
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

const store = configureStore({
  reducer: counterSlice.reducer
  // if multiple slices we would have reducer : {counter: counterSlice.reducer, other: other.reducer...}
});

export const counterActions = counterSlice.actions;

export default store;
