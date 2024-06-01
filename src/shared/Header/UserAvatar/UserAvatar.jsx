import {
    Avatar,
    Button,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import profileMenuItems from "./profileMenuItems";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../../../hooks/useAuth";

const UserAvatar = ({ handleLogOut }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleClick = (path, isLastItem) => {
        setIsMenuOpen(false);

        if (isLastItem) {
            handleLogOut();
        } else {
            navigate(path);
        }
    };

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center rounded-full p-0"
                >
                    <Avatar
                        variant="circular"
                        size="md"
                        alt={user?.displayName}
                        withBorder={true}
                        color="blue-gray"
                        className=" p-0.5"
                        src={user?.photoURL}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1">
                {profileMenuItems.map(({ label, icon: Icon, path }, idx) => {
                    const isLastItem = idx === profileMenuItems.length - 1;
                    return (
                        <MenuItem
                            key={idx}
                            onClick={() => handleClick(path, isLastItem)}
                            className={`flex items-center gap-2 rounded ${
                                isLastItem
                                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                    : ""
                            }`}
                        >
                            <Icon
                                size={20}
                                className={isLastItem ? "text-red-500" : ""}
                            />
                            <Typography
                                as="span"
                                className="font-normal"
                                color={isLastItem ? "red" : "inherit"}
                            >
                                {label}
                            </Typography>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
};

UserAvatar.propTypes = {
    handleLogOut: PropTypes.func.isRequired,
};

export default UserAvatar;
