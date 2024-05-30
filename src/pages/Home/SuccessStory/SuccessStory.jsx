import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SuccessCard from "./SuccessCard";
import Container from "../../../components/Container/Container";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import PropTypes from "prop-types";
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";

const SampleNextArrow = ({ onClick }) => {
    return (
        <button
            className="flex justify-center items-center bg-[#f3f3f3] text-[#444] hover:bg-primary transition-all h-14 w-14 md:h-20 md:w-20 rounded-full hover:text-white z-20 absolute top-[45%] -right-3 md:-right-8"
            onClick={onClick}
        >
            <FaArrowRight size={25} />
        </button>
    );
};

const SamplePrevArrow = ({ onClick }) => {
    return (
        <button
            className="flex justify-center items-center bg-[#f3f3f3] text-[#444] hover:bg-primary transition-all h-14 w-14 md:h-20 md:w-20 rounded-full hover:text-white z-20 absolute top-[45%] -left-3 md:-left-8"
            onClick={onClick}
        >
            <FaArrowLeft size={25} />
        </button>
    );
};

const SuccessStory = () => {
    const { data: stories, isPending } = useQuery({
        queryKey: ["success-sorties"],
        queryFn: async () => {
            const res = await axios.get("/data/success.json");
            return res.data;
        },
    });

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3500,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 825,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1304,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1701,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };

    if (isPending) {
        return <p>Loading...</p>;
    }

    return (
        <Container py>
            <SectionHeading
                title="Success Stories"
                subtitle="Read inspiring stories from couples who found love and happiness through Nikah Noor"
            />
            <div className="slider-container relative">
                <Slider {...settings}>
                    {stories?.map((story) => (
                        <SuccessCard key={story._id} story={story} />
                    ))}
                </Slider>
            </div>
        </Container>
    );
};

SampleNextArrow.propTypes = {
    onClick: PropTypes.func,
};

SamplePrevArrow.propTypes = {
    onClick: PropTypes.func,
};

export default SuccessStory;
