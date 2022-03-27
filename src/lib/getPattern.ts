import { IMove } from "../redux/gameplay/gameplay.interface";

export interface IPattern {
  change_after_win: boolean;
  change_after_loss: boolean;
  change_after_draw: boolean;
  random?: boolean;
}

const getPattern = (
  moveList: { move: IMove; result: "win" | "loss" | "draw" }[]
) => {
  let changesAfterWins = 0;
  let changesAfterLosses = 0;
  let changesAfterDraws = 0;
  let wins = 0;
  let losses = 0;
  let draws = 0;
  const pattern: IPattern = {
    change_after_win: false,
    change_after_loss: false,
    change_after_draw: false,
  };
  for (let i = 0; i < moveList.length - 1; i++) {
    const move = moveList[i];
    const nextMove = moveList[i + 1];
    if (move.result === "win") {
      if (nextMove.move !== move.move) changesAfterWins++;
      wins++;
    } else if (move.result === "loss") {
      if (nextMove.move !== move.move) changesAfterLosses++;
      losses++;
    } else if (move.result === "draw") {
      if (nextMove.move !== move.move) changesAfterDraws++;
      draws++;
    }
  }
  //if changes have occured more than 50% of the times, then it is a pattern
  if ((changesAfterWins / wins) * 100 >= 0.5 || wins === 0)
    pattern.change_after_win = true;
  if ((changesAfterLosses / losses) * 100 >= 0.5 || losses === 0)
    pattern.change_after_loss = true;
  if ((changesAfterDraws / draws) * 100 >= 0.5 || draws === 0)
    pattern.change_after_draw = true;
  //patter is random if all are true
  pattern.random =
    pattern.change_after_win &&
    pattern.change_after_loss &&
    pattern.change_after_draw;
  return pattern;
};

export default getPattern;
