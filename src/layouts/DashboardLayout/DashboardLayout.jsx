import { Drawer, IconButton } from "@material-tailwind/react";
import { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import SideNavigation from "./SideNavigation";
import { Outlet } from "react-router-dom";
import Logo from "../../components/Logo/Logo";

const DashboardLayout = () => {
    const [open, setOpen] = useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return (
        <>
            {/* Mobile Side navigation Button Header */}
            <div className="flex md:hidden justify-between items-center px-3 py-4 shadow">
                <Logo />
                <span onClick={openDrawer}>
                    <RxHamburgerMenu size={30} />
                </span>
            </div>
            {/* Desktop */}
            <div className="flex">
                <aside className="md:w-[30%] lg:w-[20%] border-r shadow-lg hidden md:block sticky pt-10 top-0 h-screen">
                    <SideNavigation setOpen={setOpen} />
                </aside>
                <div className="px-1 sm:px-5 md:px-8 md:w-[70%] lg:w-[80%] py-6 md:py-12">
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
        </>
    );
};

export default DashboardLayout;
