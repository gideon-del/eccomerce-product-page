import img1 from "../assets/image-product-1.jpg";
import img2 from "../assets/image-product-2.jpg";
import img3 from "../assets/image-product-3.jpg";
import img4 from "../assets/image-product-4.jpg";
import { useMemo } from "react";

const useThumnail = () => {
  const thumnails = useMemo(() => [img1, img2, img3, img4], []);
  return {
    thumnails,
  };
};

export default useThumnail;
