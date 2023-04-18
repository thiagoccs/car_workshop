import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [user, setUser] = useState("");
  const contextValue = useMemo(() => ({
    user,
    setUser,
  }), [user]);
  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};
export default MyProvider;
