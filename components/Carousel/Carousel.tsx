import React from 'react';
import Slider from 'react-slick';

type CarouselProps = {
    children: React.ReactNode | React.ReactNode[];
};

const Carousel = (props: CarouselProps) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return <Slider {...settings}>{props.children}</Slider>;
};

export default Carousel;
