import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<div>
			<nav
				style={{
					borderBottom: "solid 1px",
					paddingBottom: "1rem",
				}}
			>
				<Link to="/">Home</Link>
				<Link to="/search">search</Link>
				<Link to="/favorites">favorites</Link>
				<Link to="/about">about</Link>
			</nav>
		</div>
	);
}
