import starwars from "../assets/img/starwars.png";

export const Card = ({title, text}) => {
  return (
    <div>
      <div className="card" style={{width: 300}}>
        <img src={starwars} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <button href="#" className="btn btn-primary mx-2">Learn more!</button>
          <button href="#" className="btn btn-primary">♥</button>
        </div>
      </div>
    </div>
  )
}