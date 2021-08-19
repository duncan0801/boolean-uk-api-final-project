import React, { useEffect } from "react";
import useStore from "../store";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Grid,
} from "@material-ui/core";
import LeagueCardBig from "../components/LeagueCardBig";
import { useParams } from "react-router-dom";
import ManagerCardBig from "../components/ManagerCardBig";

function ManagerInfoPage() {
  const managers = useStore((store) => store.managers);
  const { id }: { id: string } = useParams();
  const managerToView = managers.find((manager) => {
    return manager.id === Number(id);
  });

  if (managerToView) {
    console.log(managerToView);
    return (
      <main>
        <div className="viewSection">
          <ManagerCardBig
            id={managerToView.id}
            firstName={managerToView.firstName}
            lastName={managerToView.lastName}
            age={managerToView.age}
            previousTeams={managerToView.previousTeams}
            imageUrl={managerToView.imageUrl}
            teamId={managerToView.teamId}
          />
        </div>
      </main>
    );
  }
  return <h3>Loading...</h3>;
}

export default ManagerInfoPage;
