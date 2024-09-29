import Container from "@/components/container/container";
import Controls from "@/components/controls/controls";
import CustomSwiper from "@/components/swiper/swiper";
import { FC, useRef, useCallback, useState } from "react";
import { SwiperClass } from "swiper/react";
import styles from "./app.module.scss";


const App: FC = () => {
    const swiper = useRef<SwiperClass>();

    const [reaches, setReaches] = useState({
        start: true,
        end: false
    });

    const handleSlideNext = useCallback(() => {
        swiper.current.slideNext();
    }, [swiper.current]);

    const handleSlidePrev = useCallback(() => {
        swiper.current.slidePrev();
    }, [swiper.current]);

    const resetReaches = useCallback(() => {
        setReaches({
            end: swiper.current.isEnd,
            start: swiper.current.isBeginning
        });
    }, [swiper.current])

    return (
        <main className={styles.main}>
            <Container>
                <h1 className={styles.title}>Хиты Продаж</h1>
            </Container>

            <CustomSwiper
                swiperRef={swiper}
                resetReaches={resetReaches}
            />

            <Container>
                <Controls
                    handleSlideNext={handleSlideNext}
                    handleSlidePrev={handleSlidePrev}
                    isReachEnd={reaches.end}
                    isReachStart={reaches.start}
                />
            </Container>
        </main>
    )
};

export default App;