// UserContext.js
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userRole, setUserRole] = useState('noRole');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginUser = (newRole) => {
    setIsAuthenticated(true);  
    setUserRole(newRole);
  };

  const logoutUser = () => {
    setIsAuthenticated(false);
    setUserRole('noRole');

  };

  return (
    <UserContext.Provider value={{ userRole, isAuthenticated, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};