

export const CardVehicles = ({title, image, model, manufacturer, crew  }) => {
    return(
        <div>
              <div className="card" style={{width: 300}}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">Model:{model}</p>
                  <p className="card-text">Manufacturer:{manufacturer  }</p>
                  <p className="card-text">Crew:{crew }</p>
                  <button href="#" className="btn btn-primary float-start ">Learn more!</button>
                  <button href="#" className="btn btn-primary float-end">♥</button>
                </div>
              </div>
            </div>
    )
}