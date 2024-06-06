import { Helmet } from "react-helmet-async";
import Filter from "./Filter/Filter";
import Members from "../../shared/Members/Members";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import { IoSettingsOutline } from "react-icons/io5";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { RxCross2 } from "react-icons/rx";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Biodatas = () => {
    const axiosPublic = useAxiosPublic();
    const [open, setOpen] = useState(false);
    const [selectedPage, setSelectedPage] = useState(0);
    const dataPerPage = 6;

    const [gender, setGender] = useState(null);
    const [division, setDivision] = useState(null);
    const [from, setFrom] = useState(18);
    const [to, setTo] = useState(60);

    const size = useWindowSize();

    const biodataUrl = `/biodatas?from=${from}&to=${to}${
        gender ? `&biodataType=${gender}` : ""
    }${
        division ? `&permanentDivision=${division}` : ""
    }&page=${selectedPage}&size=${dataPerPage}`;

    const countUrl = `/biodatasCount?from=${from}&to=${to}${
        gender ? `&biodataType=${gender}` : ""
    }${division ? `&permanentDivision=${division}` : ""}`;

    const { data: bioDatas = [], isPending } = useQuery({
        queryKey: [
            "members",
            gender,
            division,
            from,
            to,
            selectedPage,
            dataPerPage,
        ],
        queryFn: async () => {
            const res = await axiosPublic.get(biodataUrl);
            return res.data;
        },
    });

    const { data: totalDataObj, isPending: isCountPending } = useQuery({
        queryKey: ["members-count", gender, division, from, to],
        queryFn: async () => {
            const res = await axiosPublic.get(countUrl);
            return res.data;
        },
    });

    const applyFilter = (data) => {
        setGender(data.gender);
        setDivision(data.division);
        setFrom(data.from);
        setTo(data.to);
        setSelectedPage(0);
    };

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    const handlePageChange = (data) => {
        const currentPage = data.selected;
        setSelectedPage(currentPage);
    };

    const totalData = totalDataObj?.count;
    const totalPages = Math.ceil(totalData / dataPerPage);

    return (
        <>
            <Helmet>
                <title>Nikah Noor | Biodatas</title>
            </Helmet>
            {/* Mobile Filter Button */}
            <div className="flex justify-end pt-6 pr-3 sm:pr-8 md:hidden">
                <Button
                    onClick={openDrawer}
                    size="lg"
                    className="flex gap-2 items-center rounded-full bg-gradient-to-r from-[#542b79] to-[#eb3284]"
                >
                    <IoSettingsOutline />
                    <span>Filters</span>
                </Button>
            </div>
            {/* Desktop */}
            <div className="flex">
                <aside className="w-[25%] max-w-md border-r hidden md:block sticky pt-10 top-0 h-screen">
                    <Filter setOpen={setOpen} applyFilter={applyFilter} />
                </aside>
                <div className="px-1 sm:px-5 md:px-8 md:w-[75%] py-6 md:py-12 mx-auto">
                    <SectionHeading
                        title="All Members' Biodata"
                        subtitle="Discover profiles of our members and connect with your potential life partner"
                    />
                    <Members
                        bioDatas={bioDatas}
                        isPending={isPending}
                        totalPages={totalPages}
                        selectedPage={selectedPage}
                        handlePageChange={handlePageChange}
                        isCountPending={isCountPending}
                    />
                </div>
            </div>
            {/* Mobile Filter Drawer */}
            <Drawer
                placement="bottom"
                size={size.height ? size.height : 1000}
                open={open}
                onClose={closeDrawer}
                className="p-4 md:hidden"
            >
                <div className="mb-6 flex items-center justify-between">
                    <Typography variant="h5" color="blue-pink">
                        Filters
                    </Typography>

                    <IconButton
                        variant="text"
                        color="blue-pink"
                        onClick={closeDrawer}
                    >
                        <RxCross2 size={25} />
                    </IconButton>
                </div>
                <Filter setOpen={setOpen} applyFilter={applyFilter} />
            </Drawer>
        </>
    );
};

export default Biodatas;
