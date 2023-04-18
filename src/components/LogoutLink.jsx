import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from '../context/MyContext';

const LogoutLink = () => {
  const { setUser } = useContext(MyContext);

  const logout = () => {
    setUser("");
    localStorage.clear();
  };

  return (
    <Link to="/" onClick={logout}>
      <button>
        Logout
      </button>
    </Link>
  );
};

export default LogoutLink;
