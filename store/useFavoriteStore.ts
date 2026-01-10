import { create } from "zustand";
import { Camper } from "@/types/camper";

type FavoriteState = {
  favorites: Camper[];
  toggleFavorite: (camper: Camper) => void;
  isFavorite: (id: string) => boolean;
};

export const useFavoriteStore = create<FavoriteState>((set, get) => ({
  favorites: typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("favorites") || "[]")
    : [],

  toggleFavorite: (camper) => {
    const { favorites } = get();
    const exists = favorites.some((item) => item.id === camper.id);

    const updatedFavorites = exists
      ? favorites.filter((item) => item.id !== camper.id)
      : [...favorites, camper];

    set({ favorites: updatedFavorites });
  },

  
  isFavorite: (id) => {
    return get().favorites.some((item) => item.id === id);
  },
}));
