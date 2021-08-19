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
            <Link to="/teams">Teams</Link>
          </li>
          <li>
            <a href="/players">Players</a>
          </li>
          <li>
            <Link to="/managers">Managers</Link>
          </li>
          <li>
            <Link to="/fixtures">Fixtures</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
