import { Helmet } from "react-helmet-async";
import Filter from "./Filter/Filter";
import Members from "../../shared/Members/Members";
import Container from "../../components/Container/Container";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";

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
                    <Container py>
                        <SectionHeading
                            title="All Members' Biodata"
                            subtitle="Discover profiles of our members and connect with your potential life partner"
                        />
                        <Members />
                    </Container>
                </div>
            </div>
        </>
    );
};

export default Biodatas;
