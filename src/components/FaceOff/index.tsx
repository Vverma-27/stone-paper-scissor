import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import rockIcon from "../../assets/images/rock-icon-big.png";
import LoadingScreen from "./LoadingScreen";
import { IMove } from "../../redux/gameplay/gameplay.interface";
import Result from "./Result";
import getBestMove from "../../lib/getBestMove";
import { useAppSelector } from "../../redux/hooks";

const FaceOff = ({ selection }: { selection: IMove }) => {
  const [showLoading, setShowLoading] = useState(true);
  const [aiSelection, setAISelection] = useState<IMove>(0);
  const { moveList } = useAppSelector((state) => state.gameplay);
  useEffect(() => {
    const id = setTimeout(() => {
      setShowLoading(false);
    }, 3000);
    return () => {
      clearTimeout(id);
    };
  }, []);
  useEffect(() => {
    setAISelection(getBestMove(moveList));
  }, [selection]);
  return showLoading ? (
    <LoadingScreen />
  ) : (
    <Result aiSelection={aiSelection} userSelection={selection} />
  );
};

export default FaceOff;
