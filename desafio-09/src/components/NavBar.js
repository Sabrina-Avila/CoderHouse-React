import { Link } from "react-router-dom";
import logopanaderia from "./imagenes/logo.png";
import CartWidget from "./CartWidget";
import "./NavBar.scss";

function NavBar() {
  return (
    <header className="row header--sticky">
      <div className="col-12 navegador">
        <nav className="header__nav navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            <img src={logopanaderia} alt="logo" width="100" height="100" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="header__nav__ul--justify navbar-nav">
              <li className="header__nav__ul__li--style nav-item active">
                <Link to="/" className="header__nav__ul__li__a--link">
                  Home <span className="sr-only"></span>
                </Link>
              </li>
              <li className="header__nav__ul__li--style nav-item">
                <Link to="/category/2" className="header__nav__ul__li__a--link">
                  Tortas
                </Link>
              </li>
              <li className="header__nav__ul__li--style nav-item">
                <Link to="/category/3" className="header__nav__ul__li__a--link">
                  Tartas
                </Link>
              </li>
              <li className="header__nav__ul__li--style nav-item">
                <Link to="/category/4" className="header__nav__ul__li__a--link">
                  Merienda
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/cart" className="deco">
            <CartWidget />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
