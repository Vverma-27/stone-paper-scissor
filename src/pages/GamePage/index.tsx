import React, { useEffect } from "react";
import FaceOff from "../../components/FaceOff";
import GameStatus from "../../components/GameStatus";
import SelectOption from "../../components/SelectOption";
import { IMove } from "../../redux/gameplay/gameplay.interface";
import { useAppSelector } from "../../redux/hooks";

const Game = () => {
  const [selectedOption, setSelectedOption] = React.useState<IMove>(0);
  const { rounds: round } = useAppSelector((state) => state.gameplay);
  useEffect(() => {
    setSelectedOption(0);
  }, [round]);
  return (
    <section className="container" style={{ marginTop: "10vmin" }}>
      <GameStatus />
      {!selectedOption ? (
        <SelectOption
          onClick={(e: IMove) => {
            setSelectedOption(e);
          }}
        />
      ) : (
        <FaceOff selection={selectedOption} />
      )}
    </section>
  );
};

export default Game;
