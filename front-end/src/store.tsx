import create from "zustand";

type Store = {
  players: Player[];
  searchPlayers: string;
  getSearchPlayers: () => void;
  updateSearchPlayers: (newSearchBook: string) => void;
};

type Player = {
  id: String;
  firstName: String;
  lastName: String;
  height: Number;
  shirtNo: Number;
  nationality: String;
  weight: Number;
  position: String;
  imageUrl: String;
};

const useStore = create<Store>((set, get) => ({
  players: [],
  searchPlayers: "",
  getSearchPlayers: () => {
    let searchBooksVar = get().players.filter((player) =>
      player.lastName.toLowerCase().includes(get().searchPlayers.toLowerCase())
    );
    return searchBooksVar;
  },
  updateSearchPlayers: (newSearchPlayer) => {
    set({ searchPlayers: newSearchPlayer });
    console.log("NEW SEARCH", newSearchPlayer);
  },
}));

export default useStore;
