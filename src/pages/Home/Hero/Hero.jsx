import { Carousel, Typography } from "@material-tailwind/react";
import carouselData from "./carouselData";

const Hero = () => {
    return (
        <Carousel loop autoplay>
            {carouselData.map((item, idx) => (
                <div
                    key={idx}
                    className="relative h-[calc(100vh-200px)] w-full"
                >
                    <img
                        src={item.backgroundImage}
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/55">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                {item.description}
                            </Typography>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default Hero;
