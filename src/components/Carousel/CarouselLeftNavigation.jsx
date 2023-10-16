/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./Carousel.module.css";
import { useSwiper } from "swiper/react";
import React, { useEffect, useState } from "react";
import { ReactComponent as LeftArrow } from "../../assets/icon-left.svg";

function CarouselLeftNavigation() {
  const swiper = useSwiper();
  console.log(swiper);
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
  useEffect(() => {
    swiper.on("slidechange", function () {
      setIsBeginning(swiper.isBeginning);
    });
  }, [isBeginning, swiper, swiper.isBeginning]);
  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
}

export default CarouselLeftNavigation;