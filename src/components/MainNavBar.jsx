import { Link } from "react-router-dom";
import "./MainNavbar.css";
const MainNavBar = () => {
  return (
    <header>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/songs">songsRouter</Link>
          </li>
          <li>
            <Link to="/artists">artistsRouter</Link>
          </li>
          <li>
            <Link to="/topSongs">topSongs</Link>
          </li>
          <li>
            <Link to="/translation">translationRouter</Link>
          </li>
          <li>
            <Link to="/search">searchRoutes</Link>
          </li>
          <li>
            <Link to="/coverArt">coverArtRouter</Link>
          </li>
          <li>
            <Link to="/lyrics">lyricsRoute</Link>
          </li>
          <li>
            <Link to="/scrapping">scrappingRoutes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavBar;
