import gameplayReducer, {
  addInMoveHistory,
  incrementRound,
  reset,
} from "./gameplaySlice";
import { IGameplayState, initialState } from "./gameplay.interface";

describe("counter reducer", () => {
  it("should handle initial state", () => {
    expect(gameplayReducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });
  it("should handle move", () => {
    const actual = gameplayReducer(
      initialState,
      addInMoveHistory({ move: 0, result: "win" })
    );
    expect(actual.playerScore).toEqual(1);
    expect(actual.aiScore).toEqual(0);
    expect(actual.moveList).toEqual([0]);
  });
  it("should increment round", () => {
    const actual = gameplayReducer(initialState, incrementRound());
    expect(actual.rounds).toEqual(1);
  });
  it("should reset", () => {
    const actual = gameplayReducer(initialState, reset());
    expect(actual).toEqual(initialState);
  });
});
