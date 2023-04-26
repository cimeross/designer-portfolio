import "./App.css";
import {
	About,
	Contact,
	Footer,
	Home,
	Navbar,
	Skills,
	Projects,
} from "./Components";

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<About />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
