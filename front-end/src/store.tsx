import { NumberLiteralType } from "typescript";
import create from "zustand";

type Store = {
  players: Player[];
  teams: Team[];
  managers: Manager[];
  leagues: League[];
  fixtures: Fixture[];
  leaguesSearchString: string;
  searchPlayers: string;

  fetchPlayers: () => void;
  fetchTeams: () => void;
  fetchManagers: () => void;
  fetchLeagues: () => void;
  fetchFixtures: () => void;
  getSearchPlayers: () => void;
  setLeaguesSearchString: (searchValue: string) => void;
};

export type Player = {
  id: Number;
  firstName: string;
  lastName: string;
  height: Number;
  shirtNo: Number;
  nationality: string;
  weight: Number;
  position: string;
  imageUrl: string;
  teamId: Number;
};

export type Team = {
  id: Number;
  name: string;
  stadium: string;
  yearFormed: Number;
  badgeUrl: string;
  leagueId: Number;
  manager?: Manager;
  players: Player[];
};
export type Manager = {
  id: Number;
  firstName: string;
  lastName: string;
  age: Number;
  previousTeams: string[];
  imageUrl: string;
  teamId: Number;
};

export type League = {
  id: Number;
  name: string;
  country: string;
  numberOfTeams: Number;
  imageUrl: string;
  teams: Team[];
};

export type Fixture =
  | {
      id: Number;
      date: Date;
      homeTeamId: Number;
      awayTeamId: Number;
      result: string;
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
    let searchPlayersVar = get().players.filter((player) =>
      player.lastName.toLowerCase().includes(get().searchPlayers.toLowerCase())
    );
    return searchPlayersVar;
  },
  leaguesSearchString: "",
  setLeaguesSearchString: (searchValue) =>
    set({ leaguesSearchString: searchValue }),
}));

export default useStore;
