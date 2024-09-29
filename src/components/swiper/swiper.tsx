import { mockData } from "@/mock";
import { FC, memo } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import Slide from "./slide/slide";

import styles from "./swiper.module.scss";

import "swiper/css";
import { swiperBreakpoints } from "./constants";


interface CustomSwiperProps {
    swiperRef: {
        current: SwiperClass
    };
    resetReaches: () => void;
}

const CustomSwiper: FC<CustomSwiperProps> = ({ swiperRef, resetReaches }) => {
    return (
        <>
            <Swiper
                spaceBetween={10}
                breakpoints={swiperBreakpoints}
                onSlideChange={resetReaches}
                onSwiper={(swiper) => swiperRef.current = swiper}
                className={styles.swiper}
            >
                {mockData.map((slide, idx) => (
                    <SwiperSlide className={styles.slide}>
                        <Slide
                            {...slide}
                            key={idx}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
};

export default memo(CustomSwiper);