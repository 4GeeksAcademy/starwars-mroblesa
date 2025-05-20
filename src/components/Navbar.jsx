import { Link } from "react-router-dom";
import starwars from "../assets/img/starwars.png";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img src={starwars} style={{ width: 100 }} />
				</Link>
				<div className="ml-auto dropdown">
					<button className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown">Favorites</button>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#">Action</a></li>
						<li><a class="dropdown-item" href="#">Another action</a></li>
						<li><a class="dropdown-item" href="#">Something else here</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};