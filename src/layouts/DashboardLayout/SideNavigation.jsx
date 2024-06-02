import {
    List,
    ListItem,
    ListItemPrefix,
    Typography,
} from "@material-tailwind/react";
import Logo from "../../components/Logo/Logo";
import profileMenuItems from "../../shared/Header/UserAvatar/profileMenuItems";
import PropTypes from "prop-types";

const SideNavigation = ({ setOpen }) => {
    const handleClick = (path, isLastItem) => {
        setOpen(false);

        if (isLastItem) {
            // handleLogOut();
            console.log("logout");
        } else {
            // navigate(path);
            console.log("go to => " + path);
        }
    };

    return (
        <div className="text-center px-2 space-y-4">
            <Logo width="2/5" />

            <List>
                {profileMenuItems?.map(({ label, icon: Icon, path }, idx) => {
                    const isLastItem = idx === profileMenuItems.length - 1;
                    return (
                        <ListItem
                            key={idx}
                            onClick={() => handleClick(path, isLastItem)}
                            className={`flex items-center rounded ${
                                isLastItem
                                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                    : ""
                            }`}
                        >
                            <ListItemPrefix
                                className={isLastItem ? "text-red-500" : ""}
                            >
                                <Icon size={20} />
                            </ListItemPrefix>
                            <Typography
                                as="span"
                                className="font-normal"
                                color={isLastItem ? "red" : "inherit"}
                            >
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
