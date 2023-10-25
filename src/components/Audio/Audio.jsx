import styles from "./Audio.module.css";
import Icons from "../../assets/sprite.svg";
import { Button } from "@mui/material";
import { songsData } from "./Songs";
import { useEffect, useRef, useState } from "react";
function Audio() {
  const [isPlaying, setIsplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsData[0]);

  const audioEle = useRef();
  const indicator = useRef();
  const autoplaypause = () => {
    setIsplaying(!isPlaying);
  };
  useEffect(() => {
    if (isPlaying) {
      audioEle.current.play();
    } else {
      audioEle.current.pause();
    }
  }, [isPlaying, currentSong]);

  const onPlayingAudio = () => {
    const duration = audioEle.current.duration;
    const currentTime = audioEle.current.currentTime;
    setCurrentSong({
      ...currentSong,
      progress: (currentTime / duration) * 100,
      songDuration: duration,
      currentTime: currentTime,
    });
    if (duration === currentTime) {
      setIsplaying(false);
    }
  };
  const handleRandomClickOnProgressBar = (e) => {
    if (!audioEle.current.currentTime) return;
    const indicatorWidth = indicator.current.clientWidth;
    const offsetX = e.nativeEvent.offsetX;
    const indicatorProgress = (offsetX / indicatorWidth) * 100;
    audioEle.current.currentTime =
      currentSong.songDuration * (indicatorProgress / 100);
  };

  const findIndex = () => {
    return songsData.findIndex((song) => song.title === currentSong.title);
  };
  const movePrevious = () => {
    let index = findIndex();
    if (index === 0) {
      setCurrentSong(songsData[songsData.length - 1]);
    } else {
      setCurrentSong(songsData[index - 1]);
    }
    audioEle.current.currentTime = 0;
  };
  const moveNext = () => {
    let index = findIndex();
    if (index === songsData.length - 1) {
      setCurrentSong(songsData[0]);
    } else {
      setCurrentSong(songsData[index + 1]);
    }
    audioEle.current.currentTime = 0;
  };
  return (
    <div className={styles.audioBox}>
      <audio
        src={currentSong.url}
        ref={audioEle}
        onTimeUpdate={onPlayingAudio}
      />
      <div style={{ textAlign: "center", marginTop: "5rem" }}>
        {currentSong.title}
      </div>
      <div className={styles.audioPlayer}>
        <span>
          {" "}
          {currentSong.currentTime
            ? Math.round(
                (currentSong.currentTime / 60 + Number.EPSILON) * 100
              ) / 100
            : "00:00"}
        </span>
        <div
          className={styles.indicator}
          onClick={handleRandomClickOnProgressBar}
          ref={indicator}
        >
          <div
            className={styles.progressBar}
            style={{ width: `${currentSong?.progress || 0}%` }}
          ></div>
        </div>
        <span>
          {currentSong.songDuration
            ? Math.round(
                (currentSong.songDuration / 60 + Number.EPSILON) * 100
              ) / 100
            : "00:00"}
        </span>
      </div>
      <div className={styles.controler}>
        <Button className={styles.iconBtn} onClick={movePrevious}>
          <svg className={styles.icon}>
            <use xlinkHref={`${Icons}#icon-previous`} />
          </svg>
        </Button>
        {isPlaying ? (
          <Button className={styles.iconBtn} onClick={autoplaypause}>
            <svg className={styles.icon}>
              <use xlinkHref={`${Icons}#icon-pause`} />
            </svg>
          </Button>
        ) : (
          <Button className={styles.iconBtn} onClick={autoplaypause}>
            <svg className={styles.icon}>
              <use xlinkHref={`${Icons}#icon-play2`} />
            </svg>
          </Button>
        )}
        <Button className={styles.iconBtn} onClick={moveNext}>
          <svg className={styles.icon}>
            <use xlinkHref={`${Icons}#icon-next`} />
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default Audio;
