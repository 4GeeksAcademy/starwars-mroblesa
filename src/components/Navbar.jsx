import { Link } from "react-router-dom";
import starwars from "../assets/img/starwars.png";
import { FavoritesDropdown } from "./FavoritesDropdown";


export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-dark">
			<div className="container title">
				<Link to="/">
					<img src={starwars} style={{ width: 100 }} />
				</Link>
				<FavoritesDropdown />
			</div>
		</nav>
	);
};