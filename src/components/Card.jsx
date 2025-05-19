import rigoImageUrl from "../assets/img/rigo-baby.jpg";
export const Card = ({title, text}) => {
  return (
    <div>
      <div className="card" style={{width: 400}}>
        <img src={rigoImageUrl} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Nombre</h5>
          <p className="card-text">Leyenda</p>
          <button href="#" className="btn btn-primary ">Learn more!</button>
          <button href="#" className="btn btn-primary">♥</button>
        </div>
      </div>
    </div>
  )
}