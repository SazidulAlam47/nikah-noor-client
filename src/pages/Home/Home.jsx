import { Helmet } from "react-helmet-async";
import Hero from "./Hero/Hero";
import SuccessStory from "./SuccessStory/SuccessStory";
import Counter from "./Counter/Counter";
import Steps from "./Steps/Steps";
import PremiumMembers from "./PremiumMembers/PremiumMembers";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Nikah Noor</title>
            </Helmet>

            <Hero />
            <PremiumMembers />
            <Steps />
            <Counter />
            <SuccessStory />
        </>
    );
};

export default Home;
