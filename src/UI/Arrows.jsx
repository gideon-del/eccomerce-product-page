import next from "../assets/icon-next.svg";
import prev from "../assets/icon-previous.svg";
const Arrows = ({ prevCur, nextCur, className = "" }) => {
  return (
    <div className={className}>
      <div className="next cursor-pointer" onClick={prevCur}>
        <img src={prev} />
      </div>
      <div className="prev cursor-pointer" onClick={nextCur}>
        <img src={next} />
      </div>
    </div>
  );
};

export default Arrows;
