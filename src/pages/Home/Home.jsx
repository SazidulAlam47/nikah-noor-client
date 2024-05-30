import { Helmet } from "react-helmet-async";
import Hero from "./Hero/Hero";
import Members from "../../shared/Members/Members";
import SuccessStory from "./SuccessStory/SuccessStory";
import Counter from "./Counter/Counter";
import Steps from "./Steps/Steps";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Nikah Noor</title>
            </Helmet>

            <Hero />
            <Members />
            <Steps />
            <Counter />
            <SuccessStory />
        </>
    );
};

export default Home;
