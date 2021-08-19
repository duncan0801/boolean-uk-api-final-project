import { Link } from "react-router-dom";
import { FormControl } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";

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

      <FormControl>
        <SearchBar
          onChange={() => console.log("onChange")}
          onRequestSearch={() => console.log("onRequestSearch")}
          style={{
            margin: "0 auto",
          }}
        />
      </FormControl>
    </>
  );
}

export default Header;
