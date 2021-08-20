import useStore, { Team } from "../store";
import "../styles/createTeamModal.css";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Grid,
  TextField,
} from "@material-ui/core";
import { SyntheticEvent } from "react";
import {useHistory} from "react-router-dom"

function CreateTeamModal() {
  const setModal = useStore((store) => store.setModal);
  const modal = useStore((store) => store.modal);

  
  const history = useHistory() 

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    const target = event.target as HTMLFormElement;

    let newTeam: {
      name: string;
      stadium: string;
      yearFormed: number;
      badgeUrl: string;
      leagueId: number;
    } = {
      name: target.teamName.value,
      stadium: target.stadium.value,
      yearFormed: Number(target.yearFormed.value),
      badgeUrl: target.badgeUrl.value,
      leagueId: Number(target.leagueId.value),
    };

    fetch(`http://localhost:4000/teams`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTeam)
    })

    target.reset()
    setModal("")
    history.push("/teams")
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="teamName">
        Enter the team name
        <input type="text" name="teamName" id="name" />
      </label>

      <label htmlFor="stadium">
        Enter the teams stadium
        <input type="text" name="stadium" id="stadium" />
      </label>

      <label htmlFor="yearFormed">
        Enter the Year the Team Formed
        <input type="text" name="yearFormed" id="yearFormed" />
      </label>

      <label htmlFor="badgeUrl">
        Enter the team badgeUrl
        <input type="text" name="badgeUrl" id="badgeUrl" />
      </label>

      <label htmlFor="leagueId">
        Enter the team leagueId
        <input type="text" name="leagueId" id="leagueId" />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateTeamModal;
