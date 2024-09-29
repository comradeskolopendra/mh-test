import { FC, memo } from "react";
import styles from "./controls.module.scss";

interface ControlsProps {
    isReachStart: boolean;
    isReachEnd: boolean;
    handleSlidePrev: () => void;
    handleSlideNext: () => void;
}

const Controls: FC<ControlsProps> = ({ isReachEnd, isReachStart, handleSlideNext, handleSlidePrev }) => {
    return (
        <div className={styles.buttons}>
            <div>
                <button disabled={isReachStart} onClick={handleSlidePrev} className={styles.swiperControl}>
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="45" height="45" rx="22.5" transform="matrix(-1 0 0 1 45 0)" fill="#E9E9E9" />
                        <path d="M25.75 15L18.25 22.5L25.75 30" stroke="#888888" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </button>

                <button disabled={isReachEnd} onClick={handleSlideNext} className={styles.swiperControl}>
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="45" height="45" rx="22.5" fill="#E9E9E9" />
                        <path d="M19.25 15L26.75 22.5L19.25 30" stroke="#888888" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </button>
            </div>

            <button className={styles.showAll}>Смотреть все</button>
        </div>
    )
};

export default memo(Controls);