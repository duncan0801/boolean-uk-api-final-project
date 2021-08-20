import useStore from "../store";
import "../styles/ModalContainer.css";
import { Button } from "@material-ui/core";
import CreateTeamModal from "./CreateTeamModal";
import EditTeamPhoto from "./editTeamPhoto";

function ModalContainer() {
  const modal = useStore((store) => store.modal);
  const setModal = useStore((store) => store.setModal);

  if (modal === "") {
    return null;
  }
  return (
    <div className="editModal">
      <div className="modal">
        <Button onClick={() => setModal("")} className="close">
          X
        </Button>
        {modal === "createTeam" ? <CreateTeamModal /> : null}
        {modal === "editTeamPhoto" ? <EditTeamPhoto /> : null}
      </div>
    </div>
  );
}

export default ModalContainer;
