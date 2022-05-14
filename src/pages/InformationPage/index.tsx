import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import CreateGameModal from "../../components/CreateGameModal";
import UsernameModal from "../../components/UsernameModel";
import subscribeToGameStart from "../../lib/subscribeToGameStart";
import { GameModes } from "../../redux/gameplay/gameplay.interface";
import { setGameInfo, setGameMode } from "../../redux/gameplay/gameplaySlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import SocketService from "../../services/SocketService";
import styles from "./index.module.scss";

const InformationPage = ({
  showUsernameModal,
  onClick,
}: {
  showUsernameModal: boolean;
  onClick: (username: string) => boolean;
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const username = useAppSelector((state) => state.user.username);
  const [showGameWaitingModal, setShowGameWaitingModal] = useState(false);
  return (
    <section className="container">
      <h2 className="container__heading" style={{ marginBottom: "3vmin" }}>
        Game Rules
      </h2>
      <p className={styles.game__rules}>
        The game is played against an AI engine. Before each round you will be
        asked your selection. The AI engine will then select an option on the
        count of three. The options are Rock, Paper and Scissors. The winner is
        decided by the following rules:
        <ul className={styles.game__rules__list}>
          <li>Rock beats Scissors</li>
          <li>Scissors beats Paper</li>
          <li>Paper beats Rock</li>
        </ul>
        If you select the same option as the AI, then it will be a draw. <br />{" "}
        The game ends when one of the players has won 11 rounds or 20 rounds
        have passed.
      </p>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "3vmin",
          flexWrap: "wrap",
        }}
      >
        <Button
          onClick={() => {
            dispatch(setGameMode(GameModes.AI));
            navigate("/game");
          }}
          // onClick={() => ""}
          className={styles.play__button}
        >
          Play Against AI
        </Button>
        <Button
          // onClick={() => navigate("/game")}
          onClick={() => {
            dispatch(setGameMode(GameModes.HUMAN_VS_HUMAN));
            subscribeToGameStart(dispatch, navigate);
            SocketService.sendEvent(
              "create-game",
              username,
              (gameId: string) => {
                dispatch(setGameInfo({ gameId }));
              }
            );
            setShowGameWaitingModal(true);
          }}
          className={styles.play__button}
        >
          Play Against A Friend
        </Button>
        {showGameWaitingModal ? (
          <CreateGameModal
            onClose={() => {
              setShowGameWaitingModal(false);
            }}
          />
        ) : null}
        {showUsernameModal ? (
          <UsernameModal onClick={(username: string) => onClick(username)} />
        ) : null}
      </section>
    </section>
  );
};

export default InformationPage;
