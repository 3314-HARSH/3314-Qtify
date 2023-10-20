import styles from "./Hero.module.css";
import heroImg from "../../assets/vibrating-headphone.svg";
import vdo from "../../assets/music.mp4";
function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.video}>
        <video className={styles.videoContent} autoPlay muted loop>
          <source src={vdo} type="video/mp4" />
          your browser is not supported!!
        </video>
      </div>
      <div>
        <h1 className={styles.text}>100 Thousand Songs, ad-free</h1>
        <h1 className={styles.text}>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={heroImg} alt="headphone" width={212} />
      </div>
    </div>
  );
}

export default Hero;
