import useThumnail from "../hooks/useThumbnaill";
import Thumbnail from "./Thumbnail";
import Arrows from "../UI/Arrows";
const Modal = () => {
  const { thumnails, current, changeCurrent, prevCur, nextCur } = useThumnail();

  const moveTo = current * 100;
  return (
    <section className="hidden md:block fixed inset-0 bg-transparentBlack z-50">
      <section className="relative md:flex flex-col gap-4  justify-center w-full h-full max-w-lg mx-auto ">
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
