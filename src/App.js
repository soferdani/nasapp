import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainContainer from "./components/MainContainer";

export default function App() {
	return (
		<Router>
      <div className='App'>
        <NavBar />
        <MainContainer />
      </div>
		</Router>
	);
}
