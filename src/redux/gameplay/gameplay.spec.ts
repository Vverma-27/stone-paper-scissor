import gameplayReducer, { incrementAi, incrementPlayer } from "./gameplaySlice";
import { IGameplayState, initialState } from "./gameplay.interface";

describe("counter reducer", () => {
  it("should handle initial state", () => {
    expect(gameplayReducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  it("should handle ai increment", () => {
    const actual = gameplayReducer(
      initialState,
      incrementAi({ move: 0, result: "win" })
    );
    expect(actual.aiScore).toEqual(1);
    expect(actual.moveList).toEqual([0]);
  });

  it("should handle player increment", () => {
    const actual = gameplayReducer(
      initialState,
      incrementPlayer({ move: 0, result: "win" })
    );
    expect(actual.playerScore).toEqual(1);
    expect(actual.moveList).toEqual([0]);
  });
});
