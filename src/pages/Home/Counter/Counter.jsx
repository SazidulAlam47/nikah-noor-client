import Container from "../../../components/Container/Container";
import CounterCard from "./CounterCard";
import counterData from "./counterData";

const Counter = () => {
    return (
        <Container>
            <div className="py-12">
                <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {counterData.map((counter, idx) => (
                        <CounterCard key={idx} counter={counter} />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Counter;
