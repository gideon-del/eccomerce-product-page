import React from "react";
// import img from "../assets/image-product-1.jpg";
import next from "../assets/icon-next.svg";
import prev from "../assets/icon-previous.svg";
import add from "../assets/icon-plus.svg";
import decrease from "../assets/icon-minus.svg";
import cart from "../assets/cart-white.svg";
import Thumbnail from "./Thumbnail";
import useThumnail from "../hooks/useThumbnaill";
import { useState } from "react";
const Carousel = () => {
  const { thumnails } = useThumnail();
  const [current, setCurrent] = useState(0);
  const nextCur = () => {
    if (current >= 3) {
      setCurrent(0);
    } else {
      setCurrent((prev) => prev + 1);
    }
  };
  const prevCur = () => {
    if (current <= 0) {
      setCurrent(3);
    } else {
      setCurrent((prev) => prev - 1);
    }
  };

  const moveTo = current * 100;
  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-2 md:items-center md:px-6 md:gap-7 lg:gap-28">
        <section className="relative md:flex flex-col gap-4 mb-3">
          <figure className="flex overflow-hidden">
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
            <div className="next" onClick={prevCur}>
              <img src={prev} />
            </div>
            <div className="prev" onClick={nextCur}>
              <img src={next} />
            </div>
          </div>
          <Thumbnail changeCurrent={setCurrent} current={current} />
        </section>
        <section className="my-4 px-6 flex flex-col gap-4">
          <hgroup>
            <h1 className="uppercase font-bold text-xs text-orange mb-4">
              {" "}
              Sneaker Company
            </h1>
            <h2 className="font-bold text-3xl text-dark md:text-4xl lg:text-5xl">
              Fall Limited Edition Sneakers
            </h2>
          </hgroup>
          <p className="font-normal text-base text-grayishBlue">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="flex justify-between items-center md:flex-col md:items-start">
            <p className="price">
              $125.00<span className="discount"> 50% </span>
            </p>
            <span className="relative text-grayBlue text-base font-bold line-through ">
              {" "}
              $250.00
            </span>
          </div>
          <div className="flex flex-col gap-3 md:flex-row w-full">
            <div className="bg-lightGray rounded-md py-4 flex justify-between items-center px-6 gap-4 md:flex-1 ">
              <img src={decrease} role="button" className="cursor-pointer" />
              <p className="font-bold text-veryDarkBlue text-base">0</p>
              <img src={add} role="button" className="cursor-pointer" />
            </div>
            <button className="bg-orange rounded-md py-4 flex justify-center items-center md:px-6 md:flex-2 relative after:absolute after:inset-0 after:opacity-0 after:transition-all after:duration-500 after:ease-in-out hover:after:opacity-40 after:bg-darkGrayishBlue">
              <div className="flex gap-5">
                <img src={cart} />
                <p className="font-bold text-base text-white">Add to cart</p>
              </div>
            </button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Carousel;
