import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, personData }) => {
    return (
        <>
            <Header personData={personData} />
                {children}
            <Footer />
        </>
    );
};

export default Layout;
