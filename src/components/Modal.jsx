import useThumnail from "../hooks/useThumbnaill";

import Thumbnail from "./Thumbnail";
import Arrows from "../UI/Arrows";
const Modal = ({ toggleModal, cur }) => {
  const { thumnails, current, changeCurrent, prevCur, nextCur } =
    useThumnail(cur);

  const moveTo = current * 100;
  return (
    <section className="hidden md:block fixed inset-0 bg-transparentBlack z-50">
      <section className="relative md:flex flex-col gap-4  justify-center w-full h-full max-w-md mx-auto ">
        <div
          className="hover:text-orange  ml-auto flex justify-end cursor-pointer w-fit z-[9999999]"
          onClick={toggleModal}
        >
          <svg
            width="30"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
            className="icon-close"
          >
            <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" />
          </svg>
        </div>

        <figure className="flex overflow-hidden max-w-lg mx-auto relative">
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
        <Arrows
          nextCur={nextCur}
          prevCur={prevCur}
          className="butons px-0 -inset-x-4 "
        />
        <Thumbnail changeCurrent={changeCurrent} current={current} />
      </section>
    </section>
  );
};

export default Modal;
