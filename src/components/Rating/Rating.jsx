import "./Rating.css";
import starInactive from "../../assets/star-inactive.svg";
import starActive from "../../assets/star-active.svg";
export default function Rating({ note }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star) => (
        <img
          key={star}
          src={star <= note ? starActive : starInactive}
          alt="star"
          className="star"
        />
      ))}
    </div>
  );
}
