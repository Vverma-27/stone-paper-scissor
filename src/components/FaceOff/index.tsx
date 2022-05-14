import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import rockIcon from "../../assets/images/rock-icon-big.png";
import LoadingScreen from "./LoadingScreen";
import { GameModes, IMove } from "../../redux/gameplay/gameplay.interface";
import Result from "./Result";
import getBestMove from "../../lib/getBestMove";
import { useAppSelector } from "../../redux/hooks";
import WaitingScreen from "./WaitingScreen";

const FaceOff = ({
  selection,
  opponentSelection,
  setOpponentSelection,
}: // result
{
  selection: IMove;
  opponentSelection: IMove;
  setOpponentSelection: (h: IMove) => void;
  // result:any;
}) => {
  const [showLoading, setShowLoading] = useState(true);
  // console.log("opponset ", opponentSelection);
  // const [opponentSelection, setOpponentSelection] = useState<IMove>(0);
  const { moveList, gameMode } = useAppSelector((state) => state.gameplay);
  useEffect(() => {
    let id: NodeJS.Timeout;
    if (gameMode === GameModes.AI) {
      id = setTimeout(() => {
        setShowLoading(false);
      }, 3000);
    } else {
      setShowLoading(false);
    }
    return () => {
      clearTimeout(id);
    };
  }, []);
  useEffect(() => {
    if (gameMode === GameModes.AI) setOpponentSelection(getBestMove(moveList));
    // else setOpponentSelection(0);
  }, [selection]);
  return showLoading ? (
    <LoadingScreen />
  ) : opponentSelection ? (
    <Result
      opponentSelection={opponentSelection}
      userSelection={selection}
      // result={result}
      // setOpponentSelection={setOpponentSelection}
    />
  ) : (
    <WaitingScreen />
  );
};

export default FaceOff;
