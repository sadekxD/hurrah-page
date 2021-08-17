import "rsuite/dist/styles/rsuite-default.css";
import "./styles/style.scss";

import Create from "./pages/Create";
import Map from "./pages/Map";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<Create />
					</Route>
					<Route exact path="/map">
						<Map />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
