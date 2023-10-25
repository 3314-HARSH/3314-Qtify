import { useEffect, useState } from "react";
import "./App.css";
import { fetchTopAlbums, fetchNewAlbums, fetchAllSongsData } from "./api/api";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import Audio from "./components/Audio/Audio";
import Accordian from "./components/Accordian/Accordian";
function App() {
  const [topAlbumsData, SetTopAlbumsData] = useState([]);
  const [newAlbumsData, SetNewAlbumsData] = useState([]);
  const [allSongsData, SetAllSongsData] = useState([]);
  const [filterSongsData, SetFilterSongsData] = useState([]);
  const [value, SetValue] = useState(0);

  const handleChange = (event, newValue) => {
    SetValue(newValue);
  };

  const generateTopAlbums = async () => {
    const data = await fetchTopAlbums();
    SetTopAlbumsData(data);
  };

  const generateNewAlbums = async () => {
    const data = await fetchNewAlbums();
    SetNewAlbumsData(data);
  };

  const generateAllSongsData = async () => {
    const data = await fetchAllSongsData();
    SetAllSongsData(data);
    SetFilterSongsData(data);
  };

  const generateFilteredSongsData = () => {
    let key;
    if (value === 0) {
      SetFilterSongsData(allSongsData);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    } else if (value === 3) {
      key = "jazz";
    } else if (value === 4) {
      key = "blues";
    }

    const res = allSongsData.filter((item) => item.genre.key === key);
    SetFilterSongsData(res);
  };

  useEffect(() => {
    generateFilteredSongsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  useEffect(() => {
    generateTopAlbums();
    generateNewAlbums();
    generateAllSongsData();
  }, []);
  return (
    <div>
      <Navbar data={[...topAlbumsData, ...newAlbumsData, ...allSongsData]} />
      <Hero />
      <div style={{ padding: "2rem 2.5rem" }}>
        <Section data={topAlbumsData} type="album" title="Top Albums" />
      </div>
      <div style={{ padding: "2.5rem" }}>
        <Section data={newAlbumsData} type="album" title="New Albums" />
      </div>
      <div className="lineBreak"></div>
      <div style={{ padding: "2.5rem" }}>
        <Section
          data={filterSongsData}
          type="songs"
          title="Songs"
          value={value}
          handleChange={handleChange}
        />
      </div>
      <div className="lineBreak"></div>
      <div>
        <Accordian />
      </div>
      <div className="lineBreak-gray"></div>
      <div>
        <Audio />
      </div>
    </div>
  );
}

export default App;
