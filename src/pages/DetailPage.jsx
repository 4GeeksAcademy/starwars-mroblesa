import starwars from "../assets/img/starwars.png";
export const DetailPage = (image, title, about, age, gender, height, weight, eyeColor, hairColor) => {

    return (
        <div className="container title">
            <div>
                <img src={starwars} class="rounded float-start" alt="..." style={{ width: 600 }} />
            </div>
            <div className="text-center text m-4 my-4">
                <h1>{title}</h1>
                <p className="text-justify text m-4">{about}</p>
            </div>
            <hr className="border border-warning border-2 opacity-100 col-md-12"></hr>
            <div class="container text-center text">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
                    <div class="col border-2 border-warning border-start">
                        <h6>Age</h6>
                        <p className="detail-text">{age}</p>
                    </div>
                    <div class="col  border-2 border-warning border-start">
                        <h6>Gender</h6>
                        <p>{gender}</p>
                    </div>
                    <div class="col  border-2 border-warning border-start">
                        <h6>Height</h6>
                        <p>{height}</p>
                    </div>
                    <div class="col  border-2 border-warning border-start">
                        <h6>Weight</h6>
                        <p>{weight}</p>
                    </div>
                    <div class="col  border-2 border-warning border-start">
                        <h6>Eye Color</h6>
                        <p>{eyeColor}</p>
                    </div>
                    <div class="col border-end border-2 border-warning border-start">
                        <h6>Hair Color</h6>
                        <p>{hairColor}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}