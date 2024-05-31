import { Typography } from "@material-tailwind/react";
import Container from "../../components/Container/Container";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <>
            <Helmet>
                <title>Nikah Noor | About Us</title>
            </Helmet>
            <PageTitle title="About Us" />
            <Container py>
                <div className="max-w-screen-2xl mx-auto space-y-4">
                    <Typography
                        variant="h3"
                        className="text-center font-calibri"
                    >
                        ﷽
                    </Typography>
                    <Typography variant="lead">
                        Indeed, all praise belongs to Allah. We seek refuge in
                        Him from the evils within ourselves and from our ill
                        deeds. Peace and blessings be upon the Prophet{" "}
                        <span className="font-calibri">
                            <span className="font-calibri">(ﷺ)</span>
                        </span>
                        .
                    </Typography>
                    <Typography variant="lead">
                        Marriage is a distinctive blessing given by Almighty
                        Allah and a vital Sunnah of the Prophet{" "}
                        <span className="font-calibri">(ﷺ)</span>. According to
                        the Qur&apos;an and Hadith, marriage is regarded as a
                        means of purity, half of the deen (religion), and a
                        source of financial prosperity. Allah commands the
                        believers to marry for its moral, spiritual, social, and
                        psychological benefits. The Holy Prophet{" "}
                        <span className="font-calibri">(ﷺ)</span> said,
                        “Marriage is my precept and my practice. Those who do
                        not follow my practice are not of me.” He also said,
                        “When a man has married, he has completed one-half of
                        his religion.”
                    </Typography>
                    <Typography variant="lead">
                        The purpose of marriage is to provide a legal union that
                        safeguards society from moral and social degradation.
                        Unfortunately, influenced by Western civilization,
                        people are pursuing a misguided race for so-called
                        equality between men and women that contradicts
                        Allah&apos;s commandments, leading to moral decay in
                        society. The infiltration of Western culture in
                        education, work, and marriage, coupled with a lack of
                        adherence to Islamic Shariah and incomplete religious
                        education, has made marriage challenging and burdened
                        society with issues like adultery, fornication,
                        extramarital affairs, rape, and suicide.
                    </Typography>
                    <Typography variant="lead">
                        Furthermore, those striving to adhere to the Sunnah
                        amidst this age of fitna (trial) face difficulties
                        finding pious life partners. Recognizing these
                        challenges, we, some humble servants of Allah, were
                        inspired to create a solution. Thus, we established
                        Nikah Noor, a Bangladeshi Islamic matrimonial platform,
                        launching it on January 1, 2024. By the mercy and
                        special blessings of Allah, hundreds of practicing
                        Muslims have already found their life partners through
                        our platform, Alhamdulillah.
                    </Typography>
                    <Typography variant="lead">
                        Our aim is to make Nikah Noor a Shariah-based Islamic
                        matrimony platform, simplifying the process of finding
                        religious matchmakers. Our primary mission is to promote
                        the Sunnah way of Islamic marriage, eliminate
                        superstitions and barbaric practices of present-day
                        ignorance, and raise awareness about the curse of dowry
                        while encouraging marriages with mahr (a valuable gift
                        from the groom).
                    </Typography>
                    <Typography variant="lead">
                        In conclusion, we have ambitious plans for the
                        development of our website and are continuously
                        researching ways to make the site more user-friendly. We
                        strive to provide this service efficiently to all Muslim
                        brothers and sisters as soon as possible. May Allah keep
                        our intentions pure, make all our good deeds easy, and
                        grant us His blessings. Ameen.
                    </Typography>
                </div>
            </Container>
        </>
    );
};

export default About;
