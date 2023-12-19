import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoriteRepoStoreProps {
	favoriteRepoIds: number[];
	addToFavorites: (id: number) => void;
	removeFromFavorites: (id: number) => void;
}

const useFavoriteRepoStore = create(
	persist<FavoriteRepoStoreProps>(
		(set) => ({
			favoriteRepoIds: [],
			addToFavorites: (repoId: number) => {
				set((state) => ({
					favoriteRepoIds: [...state.favoriteRepoIds, repoId],
				}));
			},
			removeFromFavorites: (repoId: number) => {
				set((state) => ({
					favoriteRepoIds: state.favoriteRepoIds.filter((id) => id !== repoId),
				}));
			},
		}),
		{
			name: "repo-storage",
		}
	)
);

export default useFavoriteRepoStore;
