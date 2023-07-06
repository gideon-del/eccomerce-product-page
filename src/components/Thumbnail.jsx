import React from "react";
import img1 from "../assets/image-product-1-thumbnail.jpg";
import img2 from "../assets/image-product-2-thumbnail.jpg";
import img3 from "../assets/image-product-3-thumbnail.jpg";
import img4 from "../assets/image-product-4-thumbnail.jpg";
const images = [img1, img2, img3, img4];
const Thumbnail = () => {
  return (
    <figure className="hidden md:flex overflow-hidden gap-4">
      {images.map((img, i) => (
        <div key={i + "thumnail"} className="cursor-pointer">
          <img
            src={img}
            alt="Sneakers"
            className={`${
              i === 0 && "border-2  border-orange "
            } relative after:absolute after:inset-0 rounded-lg`}
          />
        </div>
      ))}
    </figure>
  );
};

export default Thumbnail;
