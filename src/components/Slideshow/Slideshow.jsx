import "./Slideshow.css";
import LeftArrow from "../../assets/arrow-back.svg";
import RightArrow from "../../assets/arrow-forward.svg";
import { useState } from "react";

export default function Slideshow({ pictures }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (pictures.length <= 0) return <p>rien a afficher</p>;

  return (
    <div className="slide">
      {pictures.length > 1 && (
        <>
          <img
            src={LeftArrow}
            alt="flèche gauche"
            className="arrows LeftArrow"
            data-testid="left-arrow"
            onClick={() => {
              if (currentImageIndex === 0) {
                setCurrentImageIndex(pictures.length - 1);
              } else {
                setCurrentImageIndex(currentImageIndex - 1);
              }
            }}
          />
          <img
            src={RightArrow}
            alt="flèche droite"
            className="arrows RightArrow"
            data-testid="right-arrow"
            onClick={() => {
              if (currentImageIndex < pictures.length - 1) {
                setCurrentImageIndex(currentImageIndex + 1);
              } else {
                setCurrentImageIndex(0);
              }
            }}
          />
          <p className="picturesIndex">{`${currentImageIndex + 1}/${
            pictures.length
          }`}</p>
        </>
      )}
      <img
        key={pictures[currentImageIndex]}
        src={pictures[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="slidesImage"
      />
    </div>
  );
}
