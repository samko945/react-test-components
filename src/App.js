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
					<CardList>
						<Card>Hello</Card>
						<Card>Here it is!</Card>
						<Card>Mirrorboy is the being reflected. What is the meaning of life? Good question.</Card>
						<Card>
							On the occasion of every accident that befalls you, remember to turn to yourself and inquire
							what power you have for turning it to use.
						</Card>
						<Card>
							Attach yourself to what is spiritually superior, regardless of what other people think or
							do. Hold to your true aspirations no matter what is going on around you.
						</Card>
						<Card>
							Never depend on the admiration of others. There is no strength in it. Personal merit cannot
							be derived from an external source.
						</Card>
						<Card>No man is free who is not a master of himself.</Card>
						<Card>If you want to improce, be content to be thought foolish and stupid.</Card>
						<Card>
							Do you wish to rise? Begin by descending. Do you plan a tower that will pierce the clouds?
							Lay first the foundation of humility.
						</Card>
						<Card>Mirrorboy is the being reflected. What is the meaning of life? Good question.</Card>
					</CardList>
					<Button style={{ padding: "1rem 2rem" }}>Get it now!</Button>
				</PageMargin>
			</main>
		</div>
	);
}

export default App;
