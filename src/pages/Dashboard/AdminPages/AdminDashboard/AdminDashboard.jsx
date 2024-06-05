import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../../shared/SectionHeading/SectionHeading";
import AdminCard from "./AdminCard";
import { BsClipboardData } from "react-icons/bs";
import { FaFemale, FaMale } from "react-icons/fa";
import { PiMedalBold } from "react-icons/pi";
import { TbCurrencyTaka } from "react-icons/tb";
import { useQuery } from "@tanstack/react-query";
import { MdOutlineRateReview } from "react-icons/md";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loader from "../../../../components/Loader/Loader";

const AdminDashboard = () => {
    const axiosSecure = useAxiosSecure();

    const { data: stats, isPending } = useQuery({
        queryKey: ["admin-stats"],
        queryFn: async () => {
            const res = await axiosSecure.get("/admin-stats");
            return res.data;
        },
    });

    if (isPending) {
        return <Loader />;
    }

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
                    count={stats?.totalBiodata}
                />
                <AdminCard
                    icon={FaMale}
                    title="Male Biodata"
                    count={stats?.maleBiodata}
                />
                <AdminCard
                    icon={FaFemale}
                    title="Female Biodata"
                    count={stats?.femaleBiodata}
                />
                <AdminCard
                    icon={PiMedalBold}
                    title="Premium Biodata"
                    count={stats?.premiumBiodata}
                />
                <AdminCard
                    icon={MdOutlineRateReview}
                    title="Total Review"
                    count={stats?.totalReview}
                />
                <AdminCard
                    icon={TbCurrencyTaka}
                    title="Total Revenue"
                    count={234} //TODO: Revenue
                />
            </div>
        </>
    );
};

export default AdminDashboard;
