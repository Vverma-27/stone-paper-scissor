import React from "react";
import FaceOff from "../../components/FaceOff";
import GameStatus from "../../components/GameStatus";
import SelectOption from "../../components/SelectOption";
import { IMove } from "../../redux/gameplay/gameplay.interface";

const Game = () => {
  const [selectedOption, setSelectedOption] = React.useState<IMove>(0);
  return (
    <section className="container" style={{ marginTop: "4vmin" }}>
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
