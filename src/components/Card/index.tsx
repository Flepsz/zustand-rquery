import { Repo } from "../../queries/repo/types";
import "./styles.css";

type CardProps = {
	repo: Repo;
	addToFavorites: (id: number) => void;
	removeFromFavorites: (id: number) => void;
	isFavorite: boolean;
};

export default function Card({
	repo,
	addToFavorites,
	removeFromFavorites,
	isFavorite,
}: CardProps) {
	function handleToggleFavorite() {
		isFavorite ? removeFromFavorites(repo.id) : addToFavorites(repo.id);
	}

	return (
		<div className={`card`}>
			<h2>{repo.name}</h2>

			<div className="card-buttons">
				<button onClick={handleToggleFavorite}>
					{!isFavorite ? "Add to favorites" : "Remove from favorites"}
				</button>
			</div>
		</div>
	);
}
