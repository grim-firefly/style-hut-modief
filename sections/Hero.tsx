import Image from 'next/image';
import React from 'react';
import Carousel from '../components/Carousel';
import { sliders } from '../constants/sliders';

const Hero = () => {
    return (
        <section
            id="#hero-section"
            className="w-full h-fit p-4 mb-8 md:mb-[100px]"
        >
            <div className="container p-0 sm:p-4">
                <div className="grid grid-cols-12 md:grid-rows-2 gap-3 md:gap-5 ">
                    <div className="col-span-12 md:col-span-8 row-span-1 md:row-span-2">
                        <Carousel>
                            {sliders.map((slider: typeof sliders[0]) => (
                                <div
                                    key={slider.id}
                                    className="relative h-[130px] sm:h-[200px] lg:h-[300px] xl:h-[350px]"
                                >
                                    <Image
                                        src={slider.image}
                                        alt={slider.title}
                                        fill
                                        priority
                                        sizes="
                                            (max-width: 640px) 100vw, 640px,
                                            (max-width: 768px) 100vw, 768px,
                                            (max-width: 1024px) 100vw, 1024px,
                                            (max-width: 1280px) 100vw, 1280px,
                                            1280px
                                        "
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>

                    {/* semi banner right side */}
                    <div className="col-span-6 md:col-span-4 row-span-1 mb-2">
                        <div className="relative w-full h-20 md:h-full md:min-h-full">
                            <Image
                                src="/banner-3.jpg"
                                alt=""
                                fill
                                sizes="
                                    (max-width: 1536px) 350px,
                                "
                                priority
                            />
                        </div>
                    </div>

                    {/*  */}
                    <div className="col-span-6 md:col-span-4 row-span-1 mb-2">
                        <div className="relative w-full h-20 md:h-full md:min-h-full">
                            <Image
                                src="/banner-5.jpg"
                                alt=""
                                fill
                                sizes="
                                    (max-width: 1536px) 350px,
                                "
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
