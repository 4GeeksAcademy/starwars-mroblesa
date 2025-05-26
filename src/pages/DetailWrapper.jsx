import { PeopleDetail } from "./../components/PeopleDetail";
import { PlanetDetail } from "./../components/PlanetDetail";
import { VehiclesDetail } from "./../components/VehiclesDetail";

export const DetailWrapper = () => {
  const { type, id } = useParams();
  
  switch(type) {
    case "people":
      return <PeopleDetail id={id} />;
    case "planet":
      return <PlanetDetail id={id} />;
    case "vehicle":
      return <VehiclesDetail id={id} />;
    default:
      return <h1>Not found</h1>;
  }
};
export default DetailWrapper;