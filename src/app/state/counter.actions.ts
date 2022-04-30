import { createAction } from "@ngrx/store";

export const incrementCount = createAction('[Counter Component] Increment');
export const decrementCount = createAction('[Counter Decrement] Decrement');
export const resetCounter = createAction('[Reset Counter] Reset');