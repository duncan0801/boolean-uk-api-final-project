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
import { useHistory } from "react-router-dom";

function EditTeamPhoto() {
  const setModal = useStore((store) => store.setModal);
  const modal = useStore((store) => store.modal);
  const currentTeam = useStore((store) => store.currentTeam);

  const teamId = currentTeam ? currentTeam.id : null;

  const history = useHistory();

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    const target = event.target as HTMLFormElement;

    await fetch(`http://localhost:4000/teams/${teamId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ badgeUrl: target.teamUrl.value }),
    });

    console.log(teamId);
    target.reset();
    setModal("");
    history.push(`/teams/${teamId}`);
  }
  return (
    <>
      <h2>Edit Team Photo</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="teamUrl">
          Team Photo URL
          <input type="text" name="teamUrl" id="teamUrl" />
        </label>
        <p>We trust you to pick the right photo </p>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default EditTeamPhoto;
