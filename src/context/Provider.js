import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [user, setUser] = useState("");
  const [selectedMechanic, setSelectedMechanic] = useState("");
  const [ready, setReady] = useState(false);
  const contextValue = useMemo(() => ({
    user,
    setUser,
    selectedMechanic,
    setSelectedMechanic,
    ready,
    setReady,
  }), [user, selectedMechanic, ready]);
  
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
