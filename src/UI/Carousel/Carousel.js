import React, { useState, useEffect } from "react";
import classes from "./Carousel.module.css";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";
import nopic from "../../assets/nopic.svg";
const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const urls = images.map((image) => URL.createObjectURL(image));
    setImageUrls(urls);
    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [images]);

  const handleNextClick = () => {
    const nextIndex = currentImageIndex + 1;
    setCurrentImageIndex(nextIndex >= images.length ? 0 : nextIndex);
  };

  const handlePrevClick = () => {
    const prevIndex = currentImageIndex - 1;
    setCurrentImageIndex(prevIndex < 0 ? images.length - 1 : prevIndex);
  };

  return (
    <div className={classes.carousel}>
      <button className={classes.arrow} onClick={handlePrevClick}>
        <img src={left} alt="left" />
      </button>

      <img
        className={classes.img}
        src={imageUrls[currentImageIndex]}
        alt="No pics"
      />
      <button className={classes.arrow} onClick={handleNextClick}>
        <img src={right} alt="right" />
      </button>
    </div>
  );
};

export default Carousel;
