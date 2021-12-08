import { Nav , Navbar, Container} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<div>
			<Nav fill variant='tabs' defaultActiveKey='/home'>
				<Nav.Item>
					<Link to='/'>Home</Link>
				</Nav.Item>
				<Nav.Item>
					<Link to='/search'>Search</Link>
				</Nav.Item>
				<Nav.Item>
					<Link to='/favorites'>Favorites</Link>
				</Nav.Item>
				<Nav.Item>
					<Link to='/about'>About</Link>
				</Nav.Item>
			</Nav>
		</div>
	);
}
