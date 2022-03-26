import { IMove } from "../redux/gameplay/gameplay.interface";

export default (
  moveList: { move: IMove; result: "win" | "loss" | "draw" }[]
) => {
  const random = Math.random();
  //for first move return random move
  if (moveList.length === 0) return random <= 0.33 ? 1 : random <= 0.66 ? 2 : 3;
  //assumption: player wont change their mind if they won
  if (moveList.slice(-1)[0].result === "win") {
    switch (moveList.slice(-1)[0].move) {
      case 1:
        return 2;
      case 2:
        return 3;
      case 3:
        return 1;
    }
  }
  //assumption: player will change mind if they lost
  if (moveList.slice(-1)[0].result === "loss") {
    switch (moveList.slice(-1)[0].move) {
      case 1:
        return 3;
      case 2:
        return 1;
      case 3:
        return 2;
    }
  }
  return 1;
};
