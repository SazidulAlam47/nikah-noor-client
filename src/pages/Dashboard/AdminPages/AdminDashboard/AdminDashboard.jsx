import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../../shared/SectionHeading/SectionHeading";
import AdminCard from "./AdminCard";
import { BsClipboardData } from "react-icons/bs";
import { FaDollarSign, FaFemale, FaMale } from "react-icons/fa";
import { PiMedalBold } from "react-icons/pi";

const AdminDashboard = () => {
    return (
        <>
            <Helmet>
                <title>Nikah Noor | Admin Dashboard</title>
            </Helmet>
            <SectionHeading
                title="Admin Dashboard"
                subtitle="Manage and oversee all aspects of the website"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-8">
                <AdminCard
                    icon={BsClipboardData}
                    title="Total Biodata"
                    count={312}
                />
                <AdminCard icon={FaMale} title="Male Biodata" count={145} />
                <AdminCard icon={FaFemale} title="Female Biodata" count={153} />
                <AdminCard
                    icon={PiMedalBold}
                    title="Premium Biodata"
                    count={57}
                />
                <AdminCard
                    icon={FaDollarSign}
                    title="Total Revenue"
                    count={234}
                />
            </div>
        </>
    );
};

export default AdminDashboard;
