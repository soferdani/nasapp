import "./App.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";

export default function App() {
	return (
		<Router>
      <div className='App'>
        <NavBar/>
      </div>
		</Router>
	);
}
