import img1 from "../assets/image-product-1.jpg";
import img2 from "../assets/image-product-2.jpg";
import img3 from "../assets/image-product-3.jpg";
import img4 from "../assets/image-product-4.jpg";
import { useMemo, useState } from "react";

const useThumnail = (cur = 0) => {
  const thumnails = useMemo(() => [img1, img2, img3, img4], []);
  const [current, changeCurrent] = useState(cur);
  const nextCur = () => {
    if (current >= 3) {
      changeCurrent(0);
    } else {
      changeCurrent((prev) => prev + 1);
    }
  };
  const prevCur = () => {
    if (current <= 0) {
      changeCurrent(3);
    } else {
      changeCurrent((prev) => prev - 1);
    }
  };

  return {
    thumnails,
    nextCur,
    prevCur,
    current,
    changeCurrent,
  };
};

export default useThumnail;
