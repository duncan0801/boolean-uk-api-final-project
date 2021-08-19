import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <h1>The Footy Oracle</h1>
      </header>
      <nav className="top-nav">
        <ul className="tab-list">
          <li>
            <Link to="/leagues">Leagues</Link>
          </li>
          <li>
            <a href="#">Teams</a>
          </li>
          <li>
            <a href="/players">Players</a>
          </li>
          <li>
            <a href="#">Managers</a>
          </li>
          <li>
            <a href="#">Fixtures</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
