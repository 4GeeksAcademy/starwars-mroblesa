import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const PeopleDetail = ({ data }) => {
    const { id } = useParams();

  useEffect(() => {
    
    const fetchData = async () => {
      const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
        const result = await response.json();   
   
      
    };
    fetchData();
  }, [id]);
  return (
    <div className="container title">
            <div>
                <img src={data.image} className="rounded float-start" alt="..." style={{ width: 600 }} />
            </div>
            <div className="text-center text m-4 my-4">
                <h1>{data.name}</h1>
                <p className="text-justify text m-4">{about}</p>
            </div>
            <hr className="border border-warning border-2 opacity-100 col-md-12"></hr>
            <div className="container text-center text">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-6">
                    <div className="col border-2 border-warning border-start">
                        <h6>Mass</h6>
                        <p className="detail-text">{data.mass}</p>
                    </div>
                    <div className="col  border-2 border-warning border-start">
                        <h6>Gender</h6>
                        <p>{data.gender}</p>
                    </div>
                    <div className="col  border-2 border-warning border-start">
                        <h6>Height</h6>
                        <p>{data.height}</p>
                    </div>
                    <div classNames="col  border-2 border-warning border-start">
                        <h6>Weight</h6>
                        <p>{data.weight}</p>
                    </div>
                    <div className="col  border-2 border-warning border-start">
                        <h6>Eye Color</h6>
                        <p>{data.eyeColor}</p>
                    </div>
                    <div className="col border-end border-2 border-warning border-start">
                        <h6>Hair Color</h6>
                        <p>{data.hairColor}</p>
                    </div>
                </div>
            </div>
        </div>
  );
};
export default PeopleDetail;