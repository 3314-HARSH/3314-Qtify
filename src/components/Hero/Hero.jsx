import styles from "./Hero.module.css";
import heroImg from "../../assets/vibrating-headphone.svg";
function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={heroImg} alt="headphone" width={212} />
      </div>
    </div>
  );
}

export default Hero;
