import { IMove } from "../redux/gameplay/gameplay.interface";

import rockIcon from "../assets/images/rock-icon-big.png";
import paperIcon from "../assets/images/paper-icon-big.png";
import scissorsIcon from "../assets/images/scissors-icon-big.png";

export default (selection: IMove) => {
  switch (selection) {
    case 1:
      return rockIcon;
    case 2:
      return paperIcon;
    case 3:
      return scissorsIcon;
  }
};
