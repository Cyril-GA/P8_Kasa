import "./HostCard.css";

export default function HostCard({ hostName, hostPicture }) {
  const [firstName, lastName] = hostName.split(" ");
  return (
    <div className="hostCard">
      <p className="hostName">
        {firstName} <br /> {lastName}
      </p>
      <img
        src={hostPicture}
        alt={`Avatar de ${hostName}`}
        className="hostPicture"
      />
    </div>
  );
}
