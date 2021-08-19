import React, { useEffect } from "react";
import useStore from "../store";
import { useParams } from "react-router-dom";
import ManagerCardBig from "../components/ManagerCardBig";

function ManagerInfoPage() {
  const fetchManagerById = useStore((store) => store.fetchManagerById);
  const currentManager = useStore((store) => store.currentManager);
  const { id }: { id: string } = useParams();

  useEffect(() => {
    fetchManagerById(id);
  }, []);

  if (currentManager) {
    console.log(currentManager);
    return (
      <main>
        <div className="viewSection">
          <ManagerCardBig
            id={currentManager.id}
            firstName={currentManager.firstName}
            lastName={currentManager.lastName}
            age={currentManager.age}
            previousTeams={currentManager.previousTeams}
            imageUrl={currentManager.imageUrl}
            teamId={currentManager.teamId}
            team={currentManager.team}
          />
        </div>
      </main>
    );
  }
  return <h3>Loading...</h3>;
}

export default ManagerInfoPage;
