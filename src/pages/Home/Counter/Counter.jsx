import Container from "../../../components/Container/Container";
import useCounterData from "../../../hooks/useCounterData";
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";
import CounterCard from "./CounterCard";

const Counter = () => {
    const counterData = useCounterData();
    return (
        <Container>
            <div className="py-12">
                <SectionHeading
                    title="Our Success in Numbers"
                    subtitle="Celebrate the love stories and successful matches made on Nikah Noor"
                />
                <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 lg:gap-y-0 gap-4 mt-14">
                    {counterData.map((counter, idx) => (
                        <CounterCard key={idx} counter={counter} />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Counter;
