import { Helmet } from "react-helmet-async";
import Filter from "./Filter/Filter";
import Members from "../../shared/Members/Members";

const Biodatas = () => {
    return (
        <>
            <Helmet>
                <title>Nikah Noor | Biodatas</title>
            </Helmet>

            <div className="flex">
                <div className="w-[25%] border-r">
                    <Filter />
                </div>
                <div className="w-[75%]">
                    <Members />
                </div>
            </div>
        </>
    );
};

export default Biodatas;
