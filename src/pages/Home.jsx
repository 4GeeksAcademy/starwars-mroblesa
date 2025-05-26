import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import CarouselSwiper from "../components/CarouselSwiper.jsx";
import { useEffect } from "react";
import { Card } from "../components/Card.jsx";
import { CardVehicles } from "../components/CardVehicles.jsx";
import { CardPLanet } from "../components/CardPLanet.jsx";

export const Home = () => {

		const { store, dispatch } = useGlobalReducer()

		const isFavorite = (item) => {
		const favorites = Array.isArray(store.favorites) ? store.favorites : [];
		return favorites.some(favorite => favorite.uid === item.uid && favorite.type === itemType);
	}

	const handleFavorite = (item, itemType) => {
		const isCurrentlyFavorite = isFavorite(item, itemType);
		if (isCurrentlyFavorite) {
			dispatch({
				type: "remove_favorite",
				payload: {
					type: itemType,
					uid: item.uid
				}
			});
		} else {
			dispatch({
				type: "add_favorite",
				payload: {
					data: {
						name: item.name,
						uid: item.uid,
						type: itemType
					}
				}
			});
		}
	}


	useEffect(() => {

		const getPeople = async () => {
			try {
				await new Promise((resolve) => setTimeout(resolve, 1000));
				const peopleResponse = await fetch("https://www.swapi.tech/api/people");
				const peopleData = await peopleResponse.json();
				const peopleWithDetails = await Promise.all(
					peopleData.results.map(async (person) => {
						const response = await fetch(person.url);
						const data = await response.json();
						return { ...data.result.properties,
							uid: data.result.uid
						}
					}));
				dispatch({ type: "get_people", payload: peopleWithDetails });
			} catch (error) {
				console.error("Error fetching people data:", error);
			}
		};
		getPeople();

		const getPlanets = async () => {
			try {
				const planetsResponse = await fetch("https://www.swapi.tech/api/planets");
				const planetsData = await planetsResponse.json();
				const planetsWithDetails = await Promise.all(
					planetsData.results.map(async (planet) => {
						const response = await fetch(planet.url);
						const data = await response.json();
						return { ...data.result.properties,
							uid: data.result.uid
						}
					}));
				dispatch({ type: "get_planets", payload: planetsWithDetails });
			} catch (error) {
				console.error("Error fetching planets data:", error);
			}
		};
		getPlanets();

		const getVehicles = async () => {
			try {
				const vehiclesResponse = await fetch("https://www.swapi.tech/api/vehicles");
				const vehiclesData = await vehiclesResponse.json();
				const vehiclesWithDetails = await Promise.all(
					vehiclesData.results.map(async (vehicle) => {
						const response = await fetch(vehicle.url);
						const data = await response.json();
						return { ...data.result.properties,
							uid: data.result.uid
						}
					}));
				dispatch({ type: "get_vehicles", payload: vehiclesWithDetails });
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
				<CarouselSwiper cards={store.people.map((people) => (
					<Card
						key={people.uid}
						title={people.name}
						image={people.image}
						height={people.height}
						gender={people.gender}
						mass={people.mass}
						uid={people.uid}
						type="people"
						onFavorite={() => handleFavorite(people)}
					/>
				))}
				/>
			</div>
			<div className=" container title">
				<hr className="border border-warning border-2 opacity-100 col-md-12"></hr>
				<h1 className="text-start p-4">Planets</h1>
				<hr className="border border-warning border-2 opacity-100 col-md-12"></hr>
				<CarouselSwiper cards={store.planets.map((planet) => (
					<CardPLanet
						key={planet.uid}
						title={planet.name}
						image={planet.image}
						diameter={planet.diameter}
						gravity={planet.gravity}
						population={planet.population}
						uid={planet.uid}
						type="planet"

					/>
				))} />
			</div>
			<div className=" container title">
				<hr className="border border-warning border-2 opacity-100 col-md-12"></hr>
				<h1 className="text-start m-4">Vehicles</h1>
				<hr className="border border-warning border-2 opacity-100 col-md-12"></hr>
				<CarouselSwiper cards={store.vehicles.map((vehicle) => (
					<CardVehicles
						key={vehicle.uid}
						title={vehicle.name}
						image={vehicle.image}
						model={vehicle.model}
						manufacturer={vehicle.manufacturer}
						crew={vehicle.crew}
						uid={vehicle.uid}
						type="vehicle"
					/>))} />
				<hr className="border border-warning border-2 opacity-100 col-md-12"></hr>
			</div>
		</div>
	);
}; 