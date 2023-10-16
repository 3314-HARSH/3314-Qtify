import { useEffect, useState } from "react";
import "./App.css";
import { fetchTopAlbums } from "./api/api";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
function App() {
  const [topAlbumsData, SetTopAlbumsData] = useState([]);
  const generateTopAlbums = async () => {
    const data = await fetchTopAlbums();
    SetTopAlbumsData(data);
  };
  useEffect(() => {
    generateTopAlbums();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <div>
        <Section data={topAlbumsData} type="album" title="Top Albums" />
      </div>
    </div>
  );
}

export default App;
