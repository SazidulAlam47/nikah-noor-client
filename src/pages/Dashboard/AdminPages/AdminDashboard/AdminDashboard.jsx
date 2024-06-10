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
import { Cell, PieChart, Pie, Legend } from "recharts";
import { Typography } from "@material-tailwind/react";
import { useWindowSize } from "@uidotdev/usehooks";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const AdminDashboard = () => {
    const axiosSecure = useAxiosSecure();
    const size = useWindowSize();

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

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = [
        { name: "Total Biodata", value: stats?.totalBiodata },
        { name: "Male Biodata", value: stats?.maleBiodata },
        { name: "Female Biodata", value: stats?.femaleBiodata },
        { name: "Male", value: stats?.premiumBiodata },
        { name: "Premium Biodata", value: stats?.premiumBiodata },
    ];

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
                    count={stats?.totalRevenue}
                />
            </div>
            <div className="w-fit mx-auto mt-8">
                <Typography variant="lead" className="text-center">
                    View Website stats in Pie Chart
                </Typography>
                <PieChart
                    width={size.width < 530 ? 250 : 500}
                    height={300}
                    className="mx-auto"
                >
                    <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {pieChartData.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={colors[index % colors.length]}
                            />
                        ))}
                    </Pie>
                    <Legend />
                </PieChart>
            </div>
        </>
    );
};

export default AdminDashboard;
