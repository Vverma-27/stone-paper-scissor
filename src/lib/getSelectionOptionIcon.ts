import { IMove } from "../redux/gameplay/gameplay.interface";

import rockIcon from "../assets/images/rock-icon-big.png";
import paperIcon from "../assets/images/paper-icon-big.png";
import scissorsIcon from "../assets/images/scissors-icon-big.png";

const getOption = (selection: IMove) => {
  switch (selection) {
    case IMove.ROCK:
      return rockIcon;
    case IMove.PAPER:
      return paperIcon;
    case IMove.SCISSORS:
      return scissorsIcon;
  }
};

export default getOption;
