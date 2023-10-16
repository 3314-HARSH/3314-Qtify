import { useState } from "react";
import Styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
function Section({ title, data, type }) {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };
  return (
    <div>
      <div className={Styles.header}>
        <h3>{title}</h3>
        <h4 className={Styles.toggleText} onClick={handleToggle}>
          {!carouselToggle ? "Collapse All" : "Show All"}
        </h4>
      </div>
      {!data.length ? (
        <CircularProgress />
      ) : (
        <div className={Styles.cardsWrapper}>
          {!carouselToggle ? (
            <div className={Styles.wrapper}>
              {data.map((item) => {
                return <Card data={item} type={type} />;
              })}
            </div>
          ) : (
            <Carousel
              data={data}
              renderComponent={(data) => <Card data={data} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Section;
