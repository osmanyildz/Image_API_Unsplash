import { useState } from "react";
import "./App.css";
import SearchHeader from "./SearchHeader";
import searchImages from "./Api";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <>
      <SearchHeader search={handleSubmit} />
      <ImageList imagesPlaceholder = {images}/>
    </>
  );
}

export default App;
