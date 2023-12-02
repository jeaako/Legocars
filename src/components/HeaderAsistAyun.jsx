import { AppBar, Toolbar, Typography} from '@mui/material';
import PropTypes from 'prop-types';

const HeaderAsistAyun = ({ onLoginClick }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#333c87' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">Legocars</Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={"../../resources/acceso.png"}
            alt="Cerrar Sesión"
            style={{
              width: '30px',
              height: '30px',
              cursor: 'pointer',
              marginLeft: '10px',
            }}
            onClick={onLoginClick}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

HeaderAsistAyun.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
};

export default HeaderAsistAyun;