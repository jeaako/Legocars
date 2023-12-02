import Header from "./Header";
import Footer from "./Footer";
import { useOutlet } from 'react-router-dom';

const Layout = () => {
    let outlet = useOutlet();
    return (
        <div>
            <Header />
            {outlet}
            <Footer />
        </div>
    );
};

export default Layout;