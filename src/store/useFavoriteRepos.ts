import { create } from "zustand";

interface FavoriteRepoStoreProps {
  favoriteRepoIds: number[];
  addToFavorites: (id: number) => void;
  removeFromFavorites: (id: number) => void;
}

const useFavoriteRepoStore = create<FavoriteRepoStoreProps>(
  (set) => ({
    favoriteRepoIds: [],
    addToFavorites: (repoId: number) => {
      set((state) => ({
        favoriteRepoIds: [...state.favoriteRepoIds, repoId],
      }))
    },
    removeFromFavorites: (repoId: number) => {
      set((state) => ({
        favoriteRepoIds: state.favoriteRepoIds.filter((id => id !== repoId)),
      }))
    },
  })
)