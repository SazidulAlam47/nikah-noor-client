import { LuLayoutDashboard, LuUserCheck2 } from "react-icons/lu";
import { IoExitOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { IoIosContacts } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { PiMedalThin } from "react-icons/pi";
import useOwnBiodata from "./useOwnBiodata";

const adminMenuItems = [
    {
        label: "Admin Dashboard",
        icon: LuLayoutDashboard,
        path: "/dashboard/admin-dashboard",
    },
    {
        label: "Manage Users",
        icon: HiOutlineUserGroup,
        path: "/dashboard/manage-users",
    },
    {
        label: "Approved Premium",
        icon: PiMedalThin,
        path: "/dashboard/approved-premium",
    },
    {
        label: "Approved Contact Request",
        icon: LuUserCheck2,
        path: "/dashboard/approved-contact-request",
    },
];

const commonItem = {
    label: "Logout",
    icon: IoExitOutline,
};

const useMenuItems = () => {
    // TODO: admin configuration
    const isAdmin = false;
    const { haveBiodata } = useOwnBiodata();

    const userMenuItems = [
        {
            label: haveBiodata ? "Edit Biodata" : "Create Biodata",
            icon: FiEdit,
            path: "/dashboard/edit-biodata",
        },
        {
            label: "View Biodata",
            icon: AiOutlineUser,
            path: "/dashboard/view-biodata",
        },
        {
            label: "My Contact Requests",
            icon: IoIosContacts,
            path: "/dashboard/contact-requests",
        },
        {
            label: "Favorite Biodatas",
            icon: CiHeart,
            path: "/dashboard/favorite-biodatas",
        },
    ];

    const menuItems = [
        ...(isAdmin ? adminMenuItems : userMenuItems),
        commonItem,
    ];

    return menuItems;
};

export default useMenuItems;
