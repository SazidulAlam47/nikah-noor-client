import Container from "../../../components/Container/Container";
import Members from "../../../shared/Members/Members";
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";

const PremiumMembers = () => {
    return (
        <Container py>
            <SectionHeading
                title="Meet Our Premium Members"
                subtitle="Explore profiles of our most active and committed members"
            />
            <Members />
        </Container>
    );
};

export default PremiumMembers;
