import React, { useState } from "react";
import backgroundSound from "../assets/audio/background-sound.wav";
import Sound from "react-sound";
import soundIcon from "../assets/images/sound.png";
import styles from "./index.module.scss";
import soundOff from "../assets/images/sound-off.png";
import Button from "./Button";

const SoundComponent = () => {
  const [playing, setPlaying] = useState(false);
  return (
    <section
      style={{
        position: "fixed",
        top: " 2vmin",
        right: " 2vmin",
      }}
    >
      <Button onClick={() => setPlaying(!playing)}>
        <img src={playing ? soundIcon : soundOff} alt="sound" />
      </Button>
      <Sound
        url={backgroundSound}
        playStatus={playing ? "PLAYING" : "PAUSED"}
        loop={true}
        volume={4}
      />
    </section>
  );
};

export default SoundComponent;
