import { Drawer, IconButton } from "@material-tailwind/react";
import { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import SideNavigation from "./SideNavigation";
import { Outlet } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";

const DashboardLayout = () => {
    const [open, setOpen] = useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return (
        <>
            <Header />
            {/* Mobile Side navigation Button Header */}
            <div className="flex md:hidden justify-between items-center px-3 py-4 shadow">
                <Logo />
                <button onClick={openDrawer}>
                    <RxHamburgerMenu size={30} />
                </button>
            </div>
            {/* Desktop */}
            <div className="flex font-poppins">
                <aside className="md:w-[30%] lg:w-[20%] max-w-xs border-r shadow hidden md:block sticky pt-10 top-0 h-screen">
                    <SideNavigation setOpen={setOpen} />
                </aside>
                <div className="px-3 sm:px-5 md:px-8 w-full md:w-[70%] lg:w-[80%] py-6 md:py-12 mx-auto">
                    <Outlet />
                </div>
            </div>
            {/* Mobile Side navigation Drawer */}
            <Drawer open={open} onClose={closeDrawer} className="p-4 md:hidden">
                <div className="mb-6 flex items-center justify-end">
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        onClick={closeDrawer}
                    >
                        <RxCross2 size={25} />
                    </IconButton>
                </div>
                <SideNavigation setOpen={setOpen} />
            </Drawer>
            <Footer />
        </>
    );
};

export default DashboardLayout;
