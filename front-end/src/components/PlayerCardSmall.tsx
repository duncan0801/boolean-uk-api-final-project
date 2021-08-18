import "../styles/playerCard.css";

function PlayerCardSmall() {
  return (
    <a href="#">
      <div className="card">
        <div className="imageContainer">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIF.48wyEFFiX6i3Pf1YtpwOTw%26pid%3DApi&f=1"
            alt="Lionel Messi"
          />
        </div>
        <h3>Lionel Messi</h3>
      </div>
    </a>
  );
}

export default PlayerCardSmall;
