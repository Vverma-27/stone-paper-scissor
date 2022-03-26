import { IMove } from "../redux/gameplay/gameplay.interface";

export default (user: IMove, ai: IMove) => {
  if (user === ai) {
    return "draw";
  }
  if (user - ai === 1 || ai - user === 1) {
    return ai < user ? "win" : "loss";
  } else {
    return ai > user ? "win" : "loss";
  }
};
