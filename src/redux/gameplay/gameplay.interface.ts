export enum GameModes {
  "AI",
  "HUMAN_VS_HUMAN",
}

export enum IMove {
  "ROCK" = 1,
  "PAPER",
  "SCISSORS",
}

export interface IGameInfo {
  host?: string;
  opponent?: string;
  gameId: string;
  hostScore?: number;
  opponentScore?: number;
  rounds?: number;
  gameOver?: boolean;
  currentHostMove?: IMove;
  currentOpponentMove?: IMove;
}

export interface IGameplayState {
  gameMode?: GameModes;
  gameInfo?: IGameInfo;
  opponentScore: number;
  hostScore: number;
  rounds: number;
  moveList: { move: IMove; result: "win" | "loss" | "draw" }[];
  gameOver: boolean;
  // onMove: "p" | "ai";
}

export const initialState: IGameplayState = {
  rounds: 0,
  hostScore: 0,
  opponentScore: 0,
  gameOver: false,
  moveList: [],
  // onMove: "p",
};
