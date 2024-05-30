import {
    Navbar,
    Typography,
    Button,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import "./Header.css";
import Container from "../../components/Container/Container";

const Header = () => {
    const [openNav, setOpenNav] = useState(false);

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
            >
                <NavLink to="/contact" className="flex items-center">
                    Contact Us
                </NavLink>
            </Typography>
        </ul>
    );

    return (
        <Navbar className="px-0 py-2 lg:py-4 mx-auto shadow-none w-full max-w-full">
            <Container>
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Logo />
                    <div className="hidden lg:block">{navList}</div>
                    <div className="flex items-center gap-x-1">
                        {/* TODO: User name */}
                        <Button className="hidden lg:inline-block">
                            <span>Login</span>
                        </Button>
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <RxCross2 size={20} />
                        ) : (
                            <RxHamburgerMenu size={20} />
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <div className="container mx-auto">
                        {navList}
                        <div className="flex items-center gap-x-1">
                            {/* TODO: User name */}
                            <Button fullWidth>
                                <span>Login</span>
                            </Button>
                        </div>
                    </div>
                </Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
