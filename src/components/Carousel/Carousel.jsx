import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./Carousel.module.css";
import React, { useEffect } from "react";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";
import "swiper/css";
function Controls({ data }) {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0, null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return <></>;
}
function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map((item) => (
          <SwiperSlide key={item.id}>{renderComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
