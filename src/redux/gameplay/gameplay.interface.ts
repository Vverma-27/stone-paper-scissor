export enum GameModes {
  "NORMAL",
}

export enum IMove {
  "ROCK" = 1,
  "PAPER",
  "SCISSORS",
}

export enum IResult {}

export interface IGameplayState {
  gameMode?: GameModes;
  aiScore: number;
  playerScore: number;
  rounds: number;
  moveList: { move: IMove; result: "win" | "loss" | "draw" }[];
  gameOver: boolean;
  // onMove: "p" | "ai";
}

export const initialState: IGameplayState = {
  rounds: 0,
  playerScore: 0,
  aiScore: 0,
  gameOver: false,
  moveList: [],
  // onMove: "p",
};
