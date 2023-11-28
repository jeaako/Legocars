// Footer.js
import { Typography, Link } from '@mui/material';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem',
    textAlign: 'center',
  };

  const linkStyle = {
    color: '#fff',
    marginRight: '10px', // Ajusta según sea necesario
    textDecoration: 'none',
  };

  return (
    <footer style={footerStyle}>
      <Typography variant="body2" color="inherit">
        © {new Date().getFullYear()} LegoCars. Todos los derechos reservados.
      </Typography>
      <div>
        <Link href="#" style={linkStyle}>
          Facebook
        </Link>
        <Link href="#" style={linkStyle}>
          Twitter
        </Link>
        <Link href="#" style={linkStyle}>
          Instagram
        </Link>
      </div>
      <Typography variant="body2" color="inherit">
        Contacto: radiator-springs@adventures.com
      </Typography>
    </footer>
  );
};

export default Footer;