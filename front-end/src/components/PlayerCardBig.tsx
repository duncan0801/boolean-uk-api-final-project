import { Team } from "../store";
import "../styles/playerCard.css";
import { Link } from "react-router-dom";

type PlayerCardBigProps = {
    id: Number,
    firstName: string,
    lastName: string,
    height: Number,
    shirtNo: Number,
    nationality: string,
    weight: Number,
    position: string,
    imageUrl: string,
    teamId: Number,
    team?: Team
}

function PlayerCardBig({
    id,
    firstName,
    lastName,
    height,
    shirtNo,
    nationality,
    weight,
    position,
    imageUrl,
    teamId,
    team
} : PlayerCardBigProps) {
    return (
        <div className="card">
            <div className="imageContainer">
                <img src={imageUrl} alt={`${firstName} ${lastName}`} />
            </div>
            <h2>
                <span className="firstName">{`${firstName} `}</span>
                <span className="lstName">{lastName}</span>
            </h2>
            <h3>Nationality: {nationality}</h3>
            <h3>Position: {position}</h3>
            <h3>Height: {height}</h3>
            <h3>Weight: {weight}</h3>
            <h3>Shirt Number: {shirtNo}</h3>
            <h3>
                Team: {team ? <Link to={`/teams/${teamId}`}>{team.name}</Link> : "No team info"}
            </h3>
        </div>
    )
}

export default PlayerCardBig