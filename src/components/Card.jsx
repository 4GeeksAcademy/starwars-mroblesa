
export const Card = ({title, image, gender, mass, height }) => {
  return (
    <div>
      <div className="card" style={{width: 300}}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Gender:{gender}</p>
          <p className="card-text">Mass:{mass}</p>
          <p className="card-text">Height:{height}</p>
          <button href="#" className="btn btn-primary float-start ">Learn more!</button>
          <button href="#" className="btn btn-primary float-end">♥</button>
        </div>
      </div>
    </div>
  )
}

//añadir link al boton y favoritos