import { Link } from "react-router-dom";
import "../styles/index.css"

const randColour = () =>
  ["green", "red", "blue", "yellow"][Math.floor(Math.random() * 4)];

function Header() {
  return (
    <header
      className="header"
      style={{ ["--border-colour"]: `var(--${randColour()})` }}
    >
      <Link to='/products'><div className="header__logo" style={{ color: `var(--${randColour()})` }}>
        Hoxbay
      </div></Link>
      <nav className="header__nav">
        <ul>
          <li>
            {/* Create here a link to this page */}
            <Link to="/products">Home</Link>
          </li>
          <li>
            {/* Create here a link to this page */}
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            {/* Create here a link to this page */}
            <Link to="/basket">Basket</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
