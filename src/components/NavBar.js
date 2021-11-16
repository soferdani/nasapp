import { Navbar, Container, Nav, Image } from "react-bootstrap";

export default function NavBar() {
	return (
		<>
			<Navbar bg='primary' variant='dark'>
				<Container>
					<Navbar.Brand href='/home'>
						<Image
							id='logo'
							src='https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg'
                            alt=''
                            fluid
						/>
					</Navbar.Brand>
					<Nav className='me-auto'>
						<Nav.Link href='/home'>Home</Nav.Link>
						<Nav.Link href='/search'>Search</Nav.Link>
						<Nav.Link href='/favourites'>Favourites</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}
