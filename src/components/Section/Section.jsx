import { useState } from "react";
import Styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../Tab/Tab";
function Section({ title, data, type, value = 0, handleChange = null }) {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  return (
    <div>
      <div className={Styles.header}>
        <h3>{title}</h3>
        {type === "album" && (
          <h4 className={Styles.toggleText} onClick={handleToggle}>
            {!carouselToggle ? "Collapse All" : "Show All"}
          </h4>
        )}
      </div>
      {type === "songs" && (
        <BasicTabs value={value} handleChange={handleChange} />
      )}
      {!data.length ? (
        <CircularProgress />
      ) : (
        <div className={Styles.cardsWrapper}>
          {!carouselToggle ? (
            <div className={Styles.wrapper}>
              {data.map((item) => {
                return <Card key={item.id} data={item} type={type} />;
              })}
            </div>
          ) : (
            <Carousel
              data={data}
              renderComponent={(item) => <Card data={item} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Section;
