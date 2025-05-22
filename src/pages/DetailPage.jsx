import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PeopleDetail from "../components/PeopleDetail";
import PlanetDetail from "../components/PlanetDetail";
import VehiclesDetail from "../components/VehiclesDetail";


export const DetailPage = (image, title, about, age, gender, height, weight, eyeColor, hairColor) => {
const { type, id } = useParams();
const [data, setData] = useState(null);

     useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/${type}/${id}/`);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };
    fetchData();
  }, [type, id]);

  if (!data) return <div>Loading...</div>;    

    return (
        <div className="container title">
            {type === "people" && <PeopleDetail data={data} />}
      {type === "planets" && <PlanetDetail data={data} />}
      {type === "vehicles" && <VehiclesDetail data={data} />}
        </div>
    )
}