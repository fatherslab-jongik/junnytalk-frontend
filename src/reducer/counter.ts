import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counterSliceName",
  initialState,
  reducers: {
    onIncrement: (state) => {
      state.value = state.value + 1;
    },
    onDecrement: (state) => {
      state.value = state.value - 1;
    },
  },
});

// createSlice 로 생성된 액션과 리듀서를 export 해준다.
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;