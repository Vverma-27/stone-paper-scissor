import { IMove } from "../redux/gameplay/gameplay.interface";
import getPattern, { IPattern } from "./getPattern";

const getBestMove = (
  moveList: { move: IMove; result: "win" | "loss" | "draw" }[]
) => {
  const random = Math.random();
  //for first move return random move
  if (moveList.length <= 1) return random <= 0.33 ? 1 : random <= 0.66 ? 2 : 3;
  const lastResult = moveList.slice(-1)[0].result;
  const userPattern: IPattern = getPattern(moveList);
  // if user does random moves
  if (userPattern.random) return random <= 0.33 ? 1 : random <= 0.66 ? 2 : 3;
  const lastMove = moveList.slice(-1)[0].move;
  if (lastResult === "loss") {
    // if last move was loss and user changes after loss then return best option of other two otherwise return winner move
    switch (lastMove) {
      case IMove.ROCK:
        return userPattern.change_after_loss ? IMove.SCISSORS : IMove.PAPER;
      case IMove.PAPER:
        return userPattern.change_after_loss ? IMove.ROCK : IMove.SCISSORS;
      case IMove.SCISSORS:
        return userPattern.change_after_loss ? IMove.PAPER : IMove.ROCK;
    }
  } else if (lastResult === "win") {
    // if last move was win and user changes after win then return best option of other two otherwise return winner move
    switch (lastMove) {
      case IMove.ROCK:
        return userPattern.change_after_win ? IMove.SCISSORS : IMove.PAPER;
      case IMove.PAPER:
        return userPattern.change_after_win ? IMove.ROCK : IMove.SCISSORS;
      case IMove.SCISSORS:
        return userPattern.change_after_win ? IMove.PAPER : IMove.ROCK;
    }
  } else {
    // if last move was draw and user changes after draw then return best option of other two otherwise return winner move
    switch (lastMove) {
      case IMove.ROCK:
        return userPattern.change_after_draw ? IMove.SCISSORS : IMove.PAPER;
      case IMove.PAPER:
        return userPattern.change_after_draw ? IMove.ROCK : IMove.SCISSORS;
      case IMove.SCISSORS:
        return userPattern.change_after_draw ? IMove.PAPER : IMove.ROCK;
    }
  }
  /*<------------ OLD ALGORITHM ------------> */
  //assumption: player wont change their mind if they won
  // if (moveList.slice(-1)[0].result === "win") {
  //   switch () {
  //     case IMove.ROCK:
  //       return IMove.PAPER;
  //     case IMove.PAPER:
  //       return IMove.SCISSORS;
  //     case IMove.SCISSORS:
  //       return IMove.ROCK;
  //   }
  // }
  //assumption: player will change mind if they lost
  // if (moveList.slice(-1)[0].result === "loss") {
  //   switch (moveList.slice(-1)[0].move) {
  //     case IMove.ROCK:
  //       return IMove.SCISSORS;
  //     case IMove.PAPER:
  //       return IMove.ROCK;
  //     case IMove.SCISSORS:
  //       return IMove.PAPER;
  //   }
  // }
};

export default getBestMove;
