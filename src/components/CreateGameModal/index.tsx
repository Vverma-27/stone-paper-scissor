import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import subscribeToGameStart from "../../lib/subscribeToGameStart";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import SocketService from "../../services/SocketService";
import Button from "../Button";
import styles from "./index.module.scss";

const CreateGameModal = ({ onClose }: { onClose: () => void }) => {
  const { gameInfo } = useAppSelector((state) => state.gameplay);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    subscribeToGameStart(dispatch, navigate);
  }, []);
  const gameUrl =
    window.location.origin +
    "/join-game?game-id=" +
    gameInfo?.gameId.slice(0, 5) +
    "...";
  const [copied, setCopied] = useState(false);
  return (
    <section className={styles.modal}>
      <section className={styles.modal__information}>
        <h4 className={styles.modal__title}>Waiting for opponent</h4>
        <section className={styles.modal__game}>
          <p className={styles.modal__game__url}>{gameUrl}</p>
          <section style={{ display: "flex", flexWrap: "wrap", gap: "2vmin" }}>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(
                  window.location.origin +
                    "/join-game?game-id=" +
                    gameInfo?.gameId
                );
                setCopied(true);
              }}
              className={styles.modal__game__copy}
            >
              {copied ? "Copied" : "Copy"}
            </Button>
            <Button
              onClick={() => {
                onClose();
                SocketService.sendEvent("cancel-game", null, null);
              }}
              className={styles.modal__game__copy}
            >
              Cancel
            </Button>
          </section>
        </section>
      </section>
    </section>
  );
};

export default CreateGameModal;
