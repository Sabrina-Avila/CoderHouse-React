import logopanaderia from './imagenes/logo.png';
import './NavBar.scss'

function NavBar() {

    return <>
    <header className="row header--sticky">
        <div className="col-12 navegador">
            <nav className="header__nav navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src={logopanaderia} alt="logo" width="100" height="100"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="header__nav__ul--justify navbar-nav">
                        <li className="header__nav__ul__li--style nav-item active">
                            <a className="header__nav__ul__li__a--link" href="#">Home <span
                                    className="sr-only"></span></a>
                        </li>
                        <li className="header__nav__ul__li--style nav-item">
                            <a className="header__nav__ul__li__a--link" href="/view/presupuesto.html">Presupuesto</a>
                        </li>
                        <li className="header__nav__ul__li--style nav-item">
                            <a className="header__nav__ul__li__a--link" href="/view/conoceme.html">Conoceme</a>
                        </li>
                        <li className="header__nav__ul__li--style nav-item">
                            <a className="header__nav__ul__li__a--link" href="/view/productos.html">Mis Productos</a>
                        </li>
                        <li className="header__nav__ul__li--style nav-item">
                            <a className="header__nav__ul__li__a--link" href="/view/cursos.html">Cursos</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    </>
}
  
export default NavBar;
  