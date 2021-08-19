import { NumberLiteralType } from "typescript";
import create from "zustand";

type Store = {
  players: Player[];
  teams: Team[];
  managers: Manager[];
  leagues: League[];
  fixtures: Fixture[];
  currentTeam: Team | null;
  leaguesSearchString: string;
  searchPlayers: string;

  fetchPlayers: () => void;
  fetchTeams: () => void;
  fetchTeamById: (id: string) => void;
  fetchManagers: () => void;
  fetchLeagues: () => void;
  fetchFixtures: () => void;
  getSearchPlayers: () => void;
  setLeaguesSearchString: (searchValue: string) => void;
};

export type Player = {
  id: number;
  firstName: string;
  lastName: string;
  height: number;
  shirtNo: number;
  nationality: string;
  weight: number;
  position: string;
  imageUrl: string;
  teamId: number;
};

export type Team = {
  id: number;
  name: string;
  stadium: string;
  yearFormed: number;
  badgeUrl: string;
  leagueId: number;
  league?: League;
  manager?: Manager;
  players: Player[];
};

export type Manager = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  previousTeams: string[];
  imageUrl: string;
  teamId: number;
};

export type League = {
  id: number;
  name: string;
  country: string;
  numberOfTeams: number;
  imageUrl: string;
  teams: Team[];
};

export type Fixture =
  | {
      id: number;
      date: Date;
      homeTeamId: number;
      awayTeamId: number;
      result: string;
    }
  | { id: number; date: Date; homeTeamId: number; awayTeamId: number };

const useStore = create<Store>((set, get) => ({
  players: [],
  teams: [],
  managers: [],
  leagues: [],
  fixtures: [],
  currentTeam: null,
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
  fetchTeamById(id) {
    fetch(`http://localhost:4000/teams/${id}`)
      .then((resp) => resp.json())
      .then((selectedTeam) => set({ currentTeam: selectedTeam.data }));
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
