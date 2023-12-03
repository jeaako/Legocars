// Footer.js
import { Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

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

  const iconStyle = {
    fontSize: '48px', // Ajusta el tamaño de los iconos según sea necesario
  };

  const facebookLink = "https://www.facebook.com"; // Cambia la URL según corresponda
  const twitterLink = "https://www.twitter.com"; // Cambia la URL según corresponda
  const instagramLink = "https://www.instagram.com"; // Cambia la URL según corresponda

  return (
    <footer style={footerStyle}>
      <Typography variant="body2" color="inherit">
        © {new Date().getFullYear()} LegoCars. Todos los derechos reservados.
      </Typography>
      <div>
        <Link href={facebookLink} style={linkStyle}>
          <FacebookIcon style={iconStyle} />
        </Link>
        <Link href={twitterLink} style={linkStyle}>
          <TwitterIcon style={iconStyle} />
        </Link>
        <Link href={instagramLink} style={linkStyle}>
          <InstagramIcon style={iconStyle} />
        </Link>
      </div>
      <Typography variant="body2" color="inherit">
        Contacto: radiator-springs@adventures.com
      </Typography>
    </footer>
  );
};

export default Footer;
