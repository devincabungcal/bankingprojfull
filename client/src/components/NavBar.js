import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "./Context";

function NavBar() {
  const { currentUser } = useContext(userContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/Home/" title="Go Home">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/CreateAccount/"
                  title="Create an Account here to get started"
                >
                  Create Account
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/deposit/"
                  title="Click to make a Deposit"
                >
                  Make a Deposit
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/withdraw/"
                  title="Click to make a Withdrawal"
                >
                  Make a Withdrawal
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/alldata/"
                  title="Click te see All Data"
                >
                  All Data
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">{currentUser?.name}</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
