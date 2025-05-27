import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const CardVehicles = ({ title, onFavorite, isFavorite, image, model, manufacturer, crew, uid, type }) => {
  const navigate = useNavigate();
  const handleLearnMore = (event) => {
    event.preventDefault();
    navigate(`/detail-page/${type}/${uid}`);
  }
  return (
    <div>
      <div className="card" style={{ width: 300 }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Model:{model}</p>
          <p className="card-text">Manufacturer:{manufacturer}</p>
          <p className="card-text">Crew:{crew}</p>
          <button onClick={handleLearnMore} className="btn btn-primary float-start ">Learn more!</button>
          <button onClick={onFavorite} className="btn btn-primary float-end"><FontAwesomeIcon icon={faHeart} /></button>
        </div>
      </div>
    </div>
  )
}