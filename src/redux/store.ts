import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import gameplayReducer from "./gameplay/gameplaySlice";

export const store = configureStore({
  reducer: {
    gameplay: gameplayReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
