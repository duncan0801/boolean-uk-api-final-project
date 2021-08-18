import { NumberLiteralType } from "typescript";
import create from "zustand";

type Store = {
  players: Player[];
  teams: Team[];
  managers: Manager[];
  leagues: League[];
  fixtures: Fixture[];
  searchPlayers: string;
  fetchPlayers: () => void;
  fetchTeams: () => void;
  fetchManagers: () => void;
  fetchLeagues: () => void;
  fetchFixtures: () => void;
  getSearchPlayers: () => void;
  updateSearchPlayers: (newSearchBook: string) => void;
};

type Player = {
  id: Number;
  firstName: String;
  lastName: String;
  height: Number;
  shirtNo: Number;
  nationality: String;
  weight: Number;
  position: String;
  imageUrl: String;
  teamId: Number;
};

type Team = {
  id: Number;
  name: String;
  stadium: String;
  yearFormed: Number;
  badgeUrl: String;
  leagueId: Number;
  manager?: Manager;
  players: Player[];
};
type Manager = {
  id: Number;
  firstName: String;
  lastName: String;
  age: Number;
  previousTeams: String[];
  imageUrl: String;
  teamId: Number;
};

type League = {
  id: Number;
  name: String;
  country: String;
  numberOfTeams: Number;
  imageUrl: String;
  teams: Team[];
};

type Fixture =
  | {
      id: Number;
      date: Date;
      homeTeamId: Number;
      awayTeamId: Number;
      result: String;
    }
  | { id: Number; date: Date; homeTeamId: Number; awayTeamId: Number };

const useStore = create<Store>((set, get) => ({
  players: [],
  teams: [],
  managers: [],
  leagues: [],
  fixtures: [],
  fetchPlayers() {
    fetch(`http://localhost:4000/players`)
      .then((resp) => resp.json())
      .then((playerData) => set({ players: playerData.data }));
  },
  fetchTeams() {
    fetch(`http://localhost:4000/teams`)
      .then((resp) => resp.json())
      .then((teamData) => set({ teams: teamData.data }));
  },
  fetchManagers() {
    fetch(`http://localhost:4000/managers`)
      .then((resp) => resp.json())
      .then((managerData) => set({ managers: managerData.data }));
  },
  fetchLeagues() {
    fetch(`http://localhost:4000/leagues`)
      .then((resp) => resp.json())
      .then((leagueData) => set({ leagues: leagueData.data }));
  },
  fetchFixtures() {
    fetch(`http://localhost:4000/fixtures`)
      .then((resp) => resp.json())
      .then((fixtureData) => set({ fixtures: fixtureData.data }));
  },

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
