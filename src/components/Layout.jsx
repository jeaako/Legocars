import Header from "./Header";
import Footer from "./Footer";
import { useOutlet } from 'react-router-dom';

const Layout = () => {
    
    const layoutStyle = {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    };

    const footerStyle = {
        flexShrink: 0,
    };

    const content = {
        flex: '1 0 auto',
        display: 'flex',
        justifyContent: 'center', // Centra el contenido verticalmente
        alignItems: 'center', // Centra el contenido horizontalmente
    };

    let outlet = useOutlet();
    return (
        <div style={layoutStyle}>
            <Header />
            <main style={content}>{outlet}</main>
            <Footer style={footerStyle}/>
        </div>
    );
};

export default Layout;