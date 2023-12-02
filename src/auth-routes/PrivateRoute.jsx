import { Navigate } from 'react-router-dom';
import { useUser } from './UserContext';
import PropTypes from 'prop-types';

function PrivateRoute({ children}) {
    const { isAuthenticated } = useUser();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    } else
     return children; 
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
    rol: PropTypes.string,
};

export default PrivateRoute;