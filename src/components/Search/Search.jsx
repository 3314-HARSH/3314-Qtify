import React, { useState } from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";

function Search({ data }) {
  const [searchVal, setSearchVal] = useState("");
  const [searchedData, setSearchedData] = useState(data);

  const searchHandler = (e) => {
    setSearchVal(e.target.value);
    let filteredData = data.filter((item) =>
      item.title.includes(e.target.value)
    );
    setSearchedData(filteredData);
  };

  return (
    <>
      <form className={styles.wrapper}>
        <input
          className={styles.search}
          placeholder="Search an album of your choice"
          onChange={searchHandler}
        />
        <button className={styles.searchBtn}>
          <SearchIcon />
        </button>
      </form>
      <div className={styles.searchItemWrapper}>
        <ul className={styles.searchItems}>
          {searchVal ? (
            searchedData.map((item) => {
              const { image, likes, title, id, follows } = item;
              return (
                <li className={styles.searchItem} key={id}>
                  <img src={image} alt="item-Img" className={styles.img} />
                  <div className={styles.about}>
                    <span>{title}</span>
                    <span>{likes ? `${likes} ❤️` : `${follows} 💪`}</span>
                  </div>
                </li>
              );
            })
          ) : (
            <></>
          )}
        </ul>
      </div>
    </>
  );
}

export default Search;
