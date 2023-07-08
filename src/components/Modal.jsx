import React from "react";
import useThumnail from "../hooks/useThumbnaill";
import next from "../assets/icon-next.svg";
import prev from "../assets/icon-previous.svg";
import Thumbnail from "./Thumbnail";
const Modal = () => {
  const { thumnails } = useThumnail();
  return (
    <section className="hidden md:block fixed inset-0 bg-transparentBlack z-50">
      <section className="relative md:flex flex-col gap-4 mb-3 justify-center">
        <figure className="flex overflow-hidden max-w-lg mx-auto">
          {thumnails.map((img, i) => (
            <img
              src={img}
              className={`md:rounded-3xl transition-all duration-500 ease-in-out`}
              key={"thumnail" + img}
              style={{
                transform: `translateX(-${moveTo}%)`,
              }}
            />
          ))}
        </figure>
        <div className="butons md:hidden">
          <div className="next">
            <img src={prev} />
          </div>
          <div className="prev">
            <img src={next} />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Modal;
