import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export const PlanetDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState()

    useEffect(() => {


        const fetchData = async () => {
            const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
            const result = await response.json();
            setData(result.result.properties);

        };
        fetchData();
    }, [id]);

    return (
        <div className="container title">
            <div>
                <img src={data.image} className="rounded float-start" alt="..." style={{ width: 600 }} />
            </div>
            <div className="text-center text m-4 my-4">
                <h1>{data.title}</h1>
                <p className="text-justify text m-4">{about}</p>
            </div>
            <hr className="border border-warning border-2 opacity-100 col-md-12"></hr>
            <div className="container text-center text">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-6">
                    <div className="col border-2 border-warning border-start">
                        <h6>Diameter</h6>
                        <p className="detail-text">{data.diameter}</p>
                    </div>
                    <div className="col  border-2 border-warning border-start">
                        <h6>Gravity </h6>
                        <p>{data.gravity}</p>
                    </div>
                    <div className="col  border-2 border-warning border-start">
                        <h6>Population</h6>
                        <p>{data.population}</p>
                    </div>
                    <div classNames="col  border-2 border-warning border-start">
                        <h6>Climate</h6>
                        <p>{data.climate}</p>
                    </div>
                    <div className="col  border-2 border-warning border-start">
                        <h6>Terrain</h6>
                        <p>{data.terrain}</p>
                    </div>
                    <div className="col border-end border-2 border-warning border-start">
                        <h6>Residents</h6>
                        <p>{data.residents}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PlanetDetail;