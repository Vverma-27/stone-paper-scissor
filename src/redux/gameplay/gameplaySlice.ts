import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMove, initialState } from "./gameplay.interface";

export const gameplaySlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addInMoveHistory: (
      state,
      payload: PayloadAction<{ move: IMove; result: "win" | "loss" | "draw" }>
    ) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.aiScore += Number(payload.payload.result === "loss");
      state.playerScore += Number(payload.payload.result === "win");
      state.moveList.push(payload.payload);
      state.gameOver =
        state.rounds === 9 || state.playerScore === 6 || state.aiScore === 6;
      // state.rounds++;
    },
    incrementRound: (state) => {
      state.rounds++;
    },
    reset: (state) => {
      // We'll use the `slice` function to namespace our actions
      return initialState;
    },
  },
});

export const { addInMoveHistory, incrementRound, reset } =
  gameplaySlice.actions;

export default gameplaySlice.reducer;
