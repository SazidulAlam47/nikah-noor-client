import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="font-poppins">
            <Header />

            <Outlet />

            <Footer />
        </div>
    );
};

export default MainLayout;
