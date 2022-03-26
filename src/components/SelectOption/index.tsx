import React from "react";
import OptionCard from "../OptionCard";
import paperIcon from "../../assets/images/paper-icon.png";
import rockIcon from "../../assets/images/rock-icon.png";
import scissorsIcon from "../../assets/images/scissors-icon.png";
import { IMove } from "../../redux/gameplay/gameplay.interface";

const SelectOption = ({ onClick }: { onClick: (e: IMove) => void }) => {
  return (
    <section className="container" style={{ height: "auto" }}>
      <h1 className="container__heading">your selection</h1>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
          flexWrap: "wrap",
          gap: "5vmin",
        }}
      >
        <OptionCard
          img={rockIcon}
          title={"ROCK"}
          onClick={() => {
            onClick(1);
          }}
          background={"55, 66, 250"}
        />
        <OptionCard
          img={paperIcon}
          title={"Paper"}
          background={"255, 71, 87"}
          onClick={() => {
            onClick(2);
          }}
        />
        <OptionCard
          img={scissorsIcon}
          title={"Scissors"}
          background={"164, 176, 190"}
          onClick={() => {
            onClick(3);
          }}
        />
      </section>
    </section>
  );
};

export default SelectOption;
