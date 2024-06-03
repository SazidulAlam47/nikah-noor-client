import {
    List,
    ListItem,
    ListItemPrefix,
    Typography,
} from "@material-tailwind/react";
import Logo from "../../components/Logo/Logo";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useDisplayError from "../../hooks/useDisplayError";
import toast from "react-hot-toast";
import useMenuItems from "../../hooks/useMenuItems";

const SideNavigation = ({ setOpen }) => {
    const navigate = useNavigate();
    const displayError = useDisplayError();
    const { logOut } = useAuth();
    const location = useLocation();
    const menuItems = useMenuItems();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("LogOut Successful");
            })
            .catch((err) => {
                displayError(err);
            });
    };

    const handleClick = (path, isLastItem) => {
        setOpen(false);

        if (isLastItem) {
            navigate("/");
            handleLogOut();
        } else {
            navigate(path);
        }
    };

    return (
        <div className="text-center px-2 space-y-4">
            <Logo width="3/5" />

            <List>
                {menuItems?.map(({ label, icon: Icon, path }, idx) => {
                    const isLastItem = idx === menuItems.length - 1;

                    return (
                        <ListItem
                            key={idx}
                            onClick={() => handleClick(path, isLastItem)}
                            className={`flex items-center rounded md:pl-4 ${
                                location.pathname === path &&
                                "text-pink-500 hover:text-pink-500 focus:text-pink-500 active:text-pink-500 hover:bg-pink-500/10 focus:bg-pink-500/10 active:bg-pink-500/10"
                            }`}
                        >
                            <ListItemPrefix>
                                <Icon size={20} />
                            </ListItemPrefix>
                            <Typography as="span" className="font-normal">
                                {label}
                            </Typography>
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );
};

SideNavigation.propTypes = {
    setOpen: PropTypes.func.isRequired,
};

export default SideNavigation;
