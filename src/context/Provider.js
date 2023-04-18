import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [user, setUser] = useState("");
  const [selectedMechanic, setSelectedMechanic] = useState("");
  const contextValue = useMemo(() => ({
    user,
    setUser,
    selectedMechanic,
    setSelectedMechanic,
  }), [user, selectedMechanic]);
  
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
