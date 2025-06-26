import "./Collapse.css";
import Arrow from "../../assets/arrow-up.svg";

export default function Collapse({ title, content, taille }) {
  const tailleClass = `collapse-${taille}`;
  return (
    <details
      data-testid="collapse"
      className={`collapse-header ${tailleClass}`}
    >
      <summary data-testid="summary">
        {title}
        <img src={Arrow} alt="flèche" className="arrow-icon" />
      </summary>

      {Array.isArray(content) ? (
        <ul>
          {content.map((title, index) => (
            <li key={index}>{title}</li>
          ))}
        </ul>
      ) : (
        <p>{content}</p>
      )}
    </details>
  );
}
