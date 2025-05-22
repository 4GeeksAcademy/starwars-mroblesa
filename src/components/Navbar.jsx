import { Link } from "react-router-dom";
import starwars from "../assets/img/starwars.png";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-dark">
			<div className="container title">
				<Link to="/">
					<img src={starwars} style={{ width: 100 }} />
				</Link>
				<div className="ml-auto dropdown">
					<button className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown">Favorites</button>
					<ul className="dropdown-menu">
						<li><a className="dropdown-item" href="#">Action</a></li>
						<li><a className="dropdown-item" href="#">Another action</a></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};