import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const CardPLanet = ({title, image, diameter, gravity,population, uid, type}) => {
  const navigate = useNavigate();
  const handleLearnMore =(event)=>{
  event.preventDefault();
      navigate(`/detail-page/${type}/${uid}`);
  }
    return(
        <div>
              <div className="card" style={{width: 300}}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">Diameter :{diameter }</p>
                  <p className="card-text">Gravity :{gravity }</p>
                  <p className="card-text">Population :{population }</p>
                  <button onClick={handleLearnMore} className="btn btn-primary float-start ">Learn more!</button>
                  <button  onFavorite={() => handleFavorite(planet, "planet")} className="btn btn-primary float-end"><FontAwesomeIcon icon={faHeart} /></button>
                </div>
              </div>
            </div>
    )
}
export default CardPLanet;