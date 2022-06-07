import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {

    const handleLogout = () => {
        console.log('logout');
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            {/* ruta inicial */}
            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    {/* <NavLink
                        className={({ isActive }) => 'nav-item nav-link' + (isActive && 'active')}
                        to="/marvel">
                        Marvel
                    </NavLink> */}
                    <NavLink
                        className="nav-item nav-link"
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link"
                        to="/dc"
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2  d-flex" >
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">
                        Esteban
                    </span>
                    <NavLink
                        className="nav-item nav-link"
                        to="/login"
                        onClick={handleLogout}
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}