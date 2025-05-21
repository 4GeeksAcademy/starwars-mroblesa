
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import CarouselSwiper from "../components/CarouselSwiper.jsx";
import { useEffect } from "react";

export const Home = () => {
	const cards = [
		{ title: "Card 1" },
		{ title: "Card 2" },
		{ title: "Card 3" },
		{ title: "Card 4" },
		{ title: "Card 5" },
	];


	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("https://www.swapi.tech/api");
				const data = await response.json();
				dispatch({ type: "get_characters", payload: data.results });
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();

		const getPeople = async () => {
			try { 
				const peopleResponse = await fetch("https://www.swapi.tech/api/people/");
				const peopleData = await peopleResponse.json();
				dispatch({ type: "get_people", payload: peopleData.results });
		} catch (error) {
				console.error("Error fetching people data:", error);
			}
		};
		getPeople();

		const getPlanets = async () => {
			try {
				const planetsResponse = await fetch("https://www.swapi.tech/api/planets/");
				const planetsData = await planetsResponse.json();
				dispatch({ type: "get_planets", payload: planetsData.results });
			} catch (error) {
				console.error("Error fetching planets data:", error);
			}
		};
		getPlanets();

		const getVehicles = async () => {
			try {
				const vehiclesResponse = await fetch("https://www.swapi.tech/api/vehicles/");
				const vehiclesData = await vehiclesResponse.json();
				dispatch({ type: "get_vehicles", payload: vehiclesData.results });
			} catch (error) {
				console.error("Error fetching vehicles data:", error);
			}
		};
		getVehicles();

	}, []);

	return (
		<div className="text-center container-fluid title border border-warning border-3 opacity-100 col-md-12">
			<div className="container title">
				<h1 className="text-start p-3">People</h1>
				<hr className="border border-warning border-2 opacity-100 col-md-12"></hr>
				<CarouselSwiper cards={store.people.map((character)=>(
					<Card 
					key={character.id} 
					title={character.name} 
					height={character.height} 
					gender={character.gender}
					age={character.age}
					/>
				))}
				 />
			</div>
			<div className=" container title">
				<hr className="border border-warning border-2 opacity-100 col-md-12"></hr>
				<h1 className="text-start p-4">Planets</h1>
				<hr className="border border-warning border-2 opacity-100 col-md-12"></hr>
				<CarouselSwiper cards={store.planets.map((planet)=>(
					<Card 
					key={planet.id} 
					title={planet.name} 
					height={planet.height}
					/>
				))} />
			</div>
			<div className=" container title"> 
				<hr className="border border-warning border-2 opacity-100 col-md-12"></hr>
				<h1 className="text-start m-4">Vehicles</h1>
				<hr className="border border-warning border-2 opacity-100 col-md-12"></hr>
				<CarouselSwiper cards={cards} />
				<hr className="border border-warning border-2 opacity-100 col-md-12"></hr>
			</div>
		</div>
	);
}; 