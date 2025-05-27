import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const Card = ({title, image, onFavorite, isFavorite, gender, mass, height, uid, type }) => {
const navigate = useNavigate();
const handleLearnMore =(event)=>{
event.preventDefault();
    navigate(`/detail-page/${type}/${uid}`);
}
  
  return (
    <div >
      <div className="card" style={{width: 300}}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Gender:{gender}</p>
          <p className="card-text">Mass:{mass}</p>
          <p className="card-text">Height:{height}</p>
          <button onClick={handleLearnMore} className="btn btn-primary float-start">Learn more!</button>
          <button  onClick={onFavorite} className="btn btn-primary float-end"><FontAwesomeIcon icon={faHeart} /></button>
        </div>
      </div>
    </div>
  )
}

