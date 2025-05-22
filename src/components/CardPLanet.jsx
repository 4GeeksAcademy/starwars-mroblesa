

export const CardPLanet = ({title, image, diameter, gravity,population}) => {
    return(
        <div>
              <div className="card" style={{width: 300}}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">Diameter :{diameter }</p>
                  <p className="card-text">Gravity :{gravity }</p>
                  <p className="card-text">Population :{population }</p>
                  <button href="#" className="btn btn-primary float-start ">Learn more!</button>
                  <button href="#" className="btn btn-primary float-end">♥</button>
                </div>
              </div>
            </div>
    )
}
export default CardPLanet;