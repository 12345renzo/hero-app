import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../auth/context/AuthContext";


export default function Navbar (){
  
  const rutas = useNavigate();
  const {state,logout} = useContext(AuthContext);

  const navegar = () => {
    logout();
    rutas('/login',{
      replace:true
    });
  }
  
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
      <Link className="navbar-brand" to="/">
        Heroes de Comic
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">{state.user?.name}</span>
          <button className="nav-item nav-link btn btn-primary" onClick={navegar}>Logout</button>
        </ul>
      </div>
    </nav>
  );
};
