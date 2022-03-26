import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGameplayState, IMove, initialState } from "./gameplay.interface";

export const gameplaySlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    incrementPlayer: (
      state,
      payload: PayloadAction<{ move: IMove; result: "win" | "loss" | "draw" }>
    ) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.playerScore += 1;
      state.moveList.push(payload.payload);
      state.rounds++;
      state.gameOver =
        state.rounds === 4 || state.playerScore === 3 || state.aiScore === 3;
    },
    incrementAi: (
      state,
      payload: PayloadAction<{ move: IMove; result: "win" | "loss" | "draw" }>
    ) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.aiScore += 1;
      state.moveList.push(payload.payload);
      state.rounds++;
      state.gameOver =
        state.rounds === 4 || state.playerScore === 3 || state.aiScore === 3;
    },
  },
});

export const { incrementAi, incrementPlayer } = gameplaySlice.actions;

export default gameplaySlice.reducer;
