import "./App.css";
import PageMargin from "./components/UI/PageMargin";
import Header from "./components/Header/Header";
import Card from "./components/Card";
import CardList from "./components/CardList";
import Button from "./components/UI/Button";

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<PageMargin>
					<h1 style={{ color: "#444" }}>Welcome to the best website</h1>
					<CardList style={{ margin: "1rem -1rem" }}>
						<Card>Hello</Card>
						<Card>Here it is!</Card>
						<Card>Mirrorboy is the being reflected. What is the meaning of life? Good question.</Card>
						<Card>Mirrorboy is the being reflected. What is the meaning of life? Good question.</Card>
						<Card>Mirrorboy is the being reflected. What is the meaning of life? Good question.</Card>
					</CardList>
					<Button style={{ padding: "1rem 2rem" }}>Get it now!</Button>
				</PageMargin>
			</main>
		</div>
	);
}

export default App;
