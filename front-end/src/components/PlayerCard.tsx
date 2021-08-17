import "../styles/playerCard.css";

function PlayerCard() {
  return (
    <div className="card">
      <div className="imageContainer">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIF.48wyEFFiX6i3Pf1YtpwOTw%26pid%3DApi&f=1"
          alt="Lionel Messi"
        />
      </div>
      <div>
        <p>Lionel</p>
        <p>Messi</p>
      </div>
    </div>
  );
}

export default PlayerCard;
