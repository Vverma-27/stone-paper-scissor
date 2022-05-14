import { IGameInfo } from "../redux/gameplay/gameplay.interface";
import { setGameInfo } from "../redux/gameplay/gameplaySlice";
import SocketService from "../services/SocketService";

export default (dispatch: any, navigate: any) => {
  SocketService.subscribeTo("game-start", (gameInfo: IGameInfo) => {
    dispatch(setGameInfo(gameInfo));
    navigate("/game");
  });
};
