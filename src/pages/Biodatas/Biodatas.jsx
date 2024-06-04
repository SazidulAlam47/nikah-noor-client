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

    const [gender, setGender] = useState(null);
    const [division, setDivision] = useState(null);
    const [from, setFrom] = useState(18);
    const [to, setTo] = useState(60);

    const size = useWindowSize();

    const url = `/biodatas?from=${from}&to=${to}${
        gender ? `&biodataType=${gender}` : ""
    }${division ? `&permanentDivision=${division}` : ""}`;

    console.log(url);

    const { data: bioDatas, isPending } = useQuery({
        queryKey: ["members", gender, division, from, to],
        queryFn: async () => {
            const res = await axiosPublic.get(url);
            return res.data;
        },
    });

    const applyFilter = (data) => {
        console.log(data);

        setGender(data.gender);
        setDivision(data.division);
        setFrom(data.from);
        setTo(data.to);
    };

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

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
                <aside className="w-[25%] border-r hidden md:block sticky pt-10 top-0 h-screen">
                    <Filter setOpen={setOpen} applyFilter={applyFilter} />
                </aside>
                <div className="px-1 sm:px-5 md:px-8 md:w-[75%] py-6 md:py-12">
                    <SectionHeading
                        title="All Members' Biodata"
                        subtitle="Discover profiles of our members and connect with your potential life partner"
                    />
                    <Members bioDatas={bioDatas} isPending={isPending} />
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
                    <Typography variant="h5" color="blue-gray">
                        Filters
                    </Typography>

                    <IconButton
                        variant="text"
                        color="blue-gray"
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
