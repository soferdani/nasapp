import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import Favorites from "./components/Favorites";

export default function App() {
	return (
		<Router>
			<div className='App'>
				<NavBar />
				<Routes>

					<Route path="/" element={<Home />} />
					<Route path="/search" element={<Search />} />
					<Route path="/favorites" element={<Favorites />} />
				</Routes>
			</div>
		</Router>
	);
}
