import { useCallback } from "react";
import "./App.css";
import Card from "./components/Card";
import useFetchRepos from "./queries/repo";
import useFavoriteRepoStore from "./store/useFavoriteRepos";

function App() {
	const { data } = useFetchRepos("Flepsz");

	const favoriteRepoIds = useFavoriteRepoStore(
		(state) => state.favoriteRepoIds
	);
	
	const addToFavorites = useFavoriteRepoStore((state) => state.addToFavorites);

	const removeFromFavorites = useFavoriteRepoStore(
		(state) => state.removeFromFavorites
	);

	const handleAddToFavorites = useCallback((repoId: number) => {
		addToFavorites(repoId)
	}, [])

	const handleRemoveFromFavorites = useCallback((repoId: number) => {
		removeFromFavorites(repoId)
	}, [])

	return (
		<div>
			{data?.map((repo) => (
				<Card
					key={repo.id}
					repo={repo}
					addToFavorites={handleAddToFavorites}
					removeFromFavorites={handleRemoveFromFavorites}
					isFavorite={favoriteRepoIds.includes(repo.id)}
				/>
			))}
		</div>
	);
}

export default App;
