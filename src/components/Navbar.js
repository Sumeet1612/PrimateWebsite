import { NavLink } from "react-router-dom";
import po from "../Images/po.png";

function Navbar() {
  return (
    <>
      <div className="Navbar">
        <div className="SmallLogo">
          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "nav-link visible" : "nav-link"
            }
          >
            <img
              style={{
                width: "70px",
                height: "70px",
              }}
              className="Logo"
              src={po}
              alt="Company Logo"
            />
          </NavLink>
        </div>
        <ul className="nav">
          <li></li>
          <li className="nav-item FirstItem">
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
    </>
  );
}
export default Navbar;
