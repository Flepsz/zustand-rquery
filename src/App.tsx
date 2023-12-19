import "./App.css";
import Card from "./components/Card";
import useFetchRepos from "./queries/repo";

function App() {
	const { data } = useFetchRepos("Flepsz");

	return (
		<div>
			{data?.map((repo) => (
				<Card key={repo.id} repo={repo} addToFavorites={() => {}} />
			))}
		</div>
	);
}

export default App;
