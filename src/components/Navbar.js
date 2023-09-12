import { NavLink } from "react-router-dom";
import po from "../Images/po.png";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg">
      <div className="Navbar container-fluid">

      <div className="SmallLogo">
          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "nav-link visible" : "nav-link"
            }
          >
            <img
              style={{
                width: "100px",
                height: "100px",
              }}
              className="Logo"
              src={po}
              alt="Company Logo"
            />
          </NavLink>
        </div>
     
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
       
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="nav navbar-nav">
          <li className="nav-item ">
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to={"/aboutus"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About Us
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to={"/services"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Services
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to={"/jobs"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Jobs
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to={"/contactus"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        </div>
      </div>
      </nav>
  );
}
export default Navbar;
