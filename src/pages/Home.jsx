
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import CarouselSwiper from "../components/CarouselSwiper.jsx";

export const Home = () => {
	const cards = [
		{ title: "Card 1" },
		{ title: "Card 2" },
		{ title: "Card 3" },
		{ title: "Card 4" },
		{ title: "Card 5" },
	];

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="text-center container-fluid m-4">
			<div className="my-4 mb-4 container">
				<h1 className="text-start m-4">Characters</h1>
				<CarouselSwiper cards={cards} />
			</div>
			<div className=" container">
				<h1 className="text-start m-4">Planets</h1>
				<CarouselSwiper cards={cards} />
			</div>
			<div className=" container"> 
				<h1 className="text-start m-4">Vehicles</h1>
				<CarouselSwiper cards={cards} />
			</div>
		</div>
	);
}; 