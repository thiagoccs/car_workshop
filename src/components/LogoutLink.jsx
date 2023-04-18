import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from '../context/MyContext';

const LogoutLink = () => {
  const { setUser } = useContext(MyContext);

  const logout = () => {
    localStorage.removeItem("currentDate");
    localStorage.removeItem("selectedMechanic");
    localStorage.removeItem('user');
    setUser('');
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
