import { LuLayoutDashboard, LuUserCheck2 } from "react-icons/lu";
import { IoExitOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { IoIosContacts } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { PiMedalThin, } from "react-icons/pi";

// TODO: admin configuration
const isAdmin = false;

const userMenuItems = [
    {
        label: "Edit Biodata",
        icon: FiEdit,
        path: "/dashboard/edit-biodata"
    },
    {
        label: "View Biodata",
        icon: AiOutlineUser,
        path: "/dashboard/view-biodata"
    },
    {
        label: "My Contact Request",
        icon: IoIosContacts,
        path: "/dashboard/my-contact-request"
    },
    {
        label: "Favorites Biodata",
        icon: CiHeart,
        path: "/dashboard/favorites-biodata"
    }
];

const adminMenuItems = [
    {
        label: "Admin Dashboard",
        icon: LuLayoutDashboard,
        path: "/dashboard/admin-dashboard"
    },
    {
        label: "Manage Users",
        icon: HiOutlineUserGroup,
        path: "/dashboard/manage-users"
    },
    {
        label: "Approved Premium",
        icon: PiMedalThin,
        path: "/dashboard/approved-premium"
    },
    {
        label: "Approved Contact Request",
        icon: LuUserCheck2,
        path: "/dashboard/approved-contact-request"
    }
];

const profileMenuItems = [

    ...(isAdmin ? adminMenuItems : userMenuItems),
    {
        label: "Logout",
        icon: IoExitOutline,
    },
];

export default profileMenuItems;