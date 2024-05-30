import { Helmet } from "react-helmet-async";
import Hero from "./Hero/Hero";
import Members from "../../shared/Members/Members";
import SuccessStory from "./SuccessStory/SuccessStory";
import Counter from "./Counter/Counter";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Nikah Noor</title>
            </Helmet>

            <Hero />
            <Members />
            <Counter />
            <SuccessStory />
        </>
    );
};

export default Home;
