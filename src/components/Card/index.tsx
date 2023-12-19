import { Repo } from '../../queries/repo/types';
import './styles.css';

type CardProps = {
  repo: Repo;
  addToFavorites: (id: number) => void;
}

export default function Card({ repo, addToFavorites }: CardProps) {
  function handleCompleteTodo() {
    addToFavorites(repo.id)
  }

  return (
    <div className={`card`}>
      <h2>{repo.name}</h2>

      <div className="card-buttons">
        <button onClick={handleCompleteTodo}>
          Favoritar
        </button>
      </div>
    </div>
  )
}