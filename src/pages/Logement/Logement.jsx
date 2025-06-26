import "./Logement.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Slideshow from "../../components/Slideshow/Slideshow";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import Collapse from "../../components/Collapse/Collapse";
import Tag from "../../components/Tag/Tag";
import HostCard from "../../components/HostCard/HostCard";
import Rating from "../../components/Rating/Rating";

export default function Logement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Logement non trouvé");
        return response.json();
      })
      .then((data) => setProperty(data))
      .catch((error) => {
        console.error("Erreur lors du fetch :", error);
        navigate("/notfound");
      });
  }, [id, navigate]);

  if (!property) return <p>Chargement ...</p>;

  return (
    <div className="app-container">
      <Navigation />
      <div className="logement main-content">
        <Slideshow pictures={property.pictures} />
        <div className="aboutContent">
          <div className="title">
            <h1 className="propertyTitle">{property.title}</h1>
            <p className="propertyLocation">{property.location}</p>
            <div className="tags">
              {property.tags.map((tag) => (
                <Tag key={tag} tagName={tag} />
              ))}
            </div>
          </div>
          <div className="hostInfos">
            <HostCard
              hostName={property.host.name}
              hostPicture={property.host.picture}
            />
            <Rating note={parseInt(property.rating)} />
          </div>
        </div>
        <div className="details">
          <Collapse
            title="Description"
            content={property.description}
            taille="medium"
          />
          <Collapse
            title="Équipements"
            content={property.equipments}
            taille="medium"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
