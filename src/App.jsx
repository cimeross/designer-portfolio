import "./App.css";
import {
	About,
	Contact,
	Footer,
	Home,
	Navbar,
	Illustrator,
	Photoshop,
	Skills,
} from "./Components";

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<About />
			<Skills />
			<Illustrator />
			<Photoshop />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
