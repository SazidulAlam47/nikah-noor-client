import {
    Navbar,
    Typography,
    Button,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import "./Header.css";
import Container from "../../components/Container/Container";
import UserAvatar from "./UserAvatar/UserAvatar";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import displayError from "../../utils/displayError";

const Header = () => {
    const [openNav, setOpenNav] = useState(false);
    const { user, logOut } = useAuth();
    // TODO: admin configuration
    const isAdmin = false;

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="paragraph"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
                onClick={() => setOpenNav(false)}
            >
                <NavLink to="/" className="flex items-center">
                    Home
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="paragraph"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
                onClick={() => setOpenNav(false)}
            >
                <NavLink to="/biodatas" className="flex items-center">
                    Biodatas
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="paragraph"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
                onClick={() => setOpenNav(false)}
            >
                <NavLink to="/about" className="flex items-center">
                    About Us
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="paragraph"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
                onClick={() => setOpenNav(false)}
            >
                <NavLink to="/contact" className="flex items-center">
                    Contact Us
                </NavLink>
            </Typography>
        </ul>
    );

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("LogOut Successful");
            })
            .catch((err) => {
                displayError(err);
            });
        console.log("logout");
    };

    return (
        <Navbar className="px-0 py-3 lg:py-4 mx-auto w-full max-w-full rounded-none shadow-md">
            <Container>
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Logo />
                    <div className="hidden lg:block">{navList}</div>
                    <div className="flex gap-4 items-center">
                        {user ? (
                            <UserAvatar handleLogOut={handleLogOut} />
                        ) : (
                            <Link to="/login">
                                <Button className="hidden lg:block">
                                    <span>Login</span>
                                </Button>
                            </Link>
                        )}
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <RxCross2 size={25} />
                            ) : (
                                <RxHamburgerMenu size={25} />
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav}>
                    <div className="container mx-auto">
                        {navList}
                        <div className="flex items-center gap-x-1">
                            {user ? (
                                <>
                                    {isAdmin ? (
                                        <Link
                                            to="/dashboard/admin-dashboard"
                                            className="w-full"
                                        >
                                            <Button fullWidth>
                                                <span>Admin Dashboard</span>
                                            </Button>
                                        </Link>
                                    ) : (
                                        <Link
                                            to="/dashboard/edit-biodata"
                                            className="w-full"
                                        >
                                            <Button fullWidth>
                                                <span>Edit Biodata</span>
                                            </Button>
                                        </Link>
                                    )}

                                    <Button
                                        fullWidth
                                        color="blue-gray"
                                        onClick={handleLogOut}
                                    >
                                        <span>Logout</span>
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" className="w-full">
                                        <Button fullWidth>
                                            <span>Login</span>
                                        </Button>
                                    </Link>
                                    <Link to="/register" className="w-full">
                                        <Button fullWidth color="blue-gray">
                                            <span>Register</span>
                                        </Button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
