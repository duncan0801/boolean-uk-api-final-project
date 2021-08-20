import { NumberLiteralType } from "typescript";
import create from "zustand";

type Store = {
  modal: string;
  setModal: (modal: string) => void;
  players: Player[];
  teams: Team[];
  managers: Manager[];
  leagues: League[];
  fixtures: Fixture[];
  currentTeam: Team | null;
  currentFixture: Fixture | null;
  leaguesSearchString: string;
  searchPlayers: string;
  currentManager: Manager | null;
  currentPlayer: Player | null;

  fetchPlayers: () => void;
  fetchPlayerById: (id: string) => void;
  fetchTeams: () => void;
  fetchTeamById: (id: string) => void;
  fetchManagers: () => void;
  fetchManagerById: (id: string) => void;
  fetchLeagues: () => void;
  fetchFixtures: () => void;
  fetchFixtureById: (id: string) => void;
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
  team?: Team;
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
  team?: Team;
};

export type League = {
  id: number;
  name: string;
  country: string;
  numberOfTeams: number;
  imageUrl: string;
  teams: Team[];
};

export type Fixture = {
  id: number;
  date: Date;
  homeTeamId: number;
  awayTeamId: number;
  result?: string;
  homeTeam: Team;
  awayTeam: Team;
};

const useStore = create<Store>((set, get) => ({
  modal: "createTeam",
  setModal: (modal) => set({ modal }),
  players: [],
  teams: [],
  managers: [],
  leagues: [],
  fixtures: [],
  currentTeam: null,
  currentFixture: null,
  currentManager: null,
  currentPlayer: null,
  fetchPlayers() {
    fetch(`http://localhost:4000/players`)
      .then((resp) => resp.json())
      .then((playerData) => set({ players: playerData.data }));
  },
  fetchPlayerById(id) {
    fetch(`http://localhost:4000/players/${id}`)
      .then((resp) => resp.json())
      .then((selectedPlayer) => set({ currentPlayer: selectedPlayer.data }));
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
  fetchManagerById(id) {
    fetch(`http://localhost:4000/managers/${id}`)
      .then((resp) => resp.json())
      .then((selectedManager) => set({ currentManager: selectedManager.data }));
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
  fetchFixtureById(id) {
    fetch(`http://localhost:4000/fixtures/${id}`)
      .then((resp) => resp.json())
      .then((selectedFixture) => set({ currentFixture: selectedFixture.data }));
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
