import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  GameModes,
  IGameInfo,
  IMove,
  initialState,
} from "./gameplay.interface";

export const gameplaySlice = createSlice({
  name: "gamePlay",
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
      state.opponentScore += Number(payload.payload.result === "loss");
      state.hostScore += Number(payload.payload.result === "win");
      state.moveList.push(payload.payload);
      state.gameOver =
        state.rounds === 9 ||
        state.hostScore === 6 ||
        state.opponentScore === 6;
      // state.rounds++;
    },
    setGameMode: (state, payload: PayloadAction<GameModes>) => {
      state.gameMode = payload.payload;
    },
    incrementRound: (state) => {
      state.rounds++;
    },
    setGameInfo: (state, payload: PayloadAction<IGameInfo>) => {
      state.gameInfo = payload.payload;
      state.gameMode = GameModes.HUMAN_VS_HUMAN;
      state.rounds = payload.payload.rounds || state.rounds;
      state.hostScore = payload.payload.hostScore || state.hostScore;
      state.opponentScore =
        payload.payload.opponentScore || state.opponentScore;
      state.gameOver = payload.payload.gameOver || state.gameOver;
    },
    reset: (state) => {
      // We'll use the `slice` function to namespace our actions
      return initialState;
    },
  },
});

export const {
  addInMoveHistory,
  incrementRound,
  reset,
  setGameMode,
  setGameInfo,
} = gameplaySlice.actions;

export default gameplaySlice.reducer;
