import { getDeclination } from "@/helpers";
import type { MiddleProps } from "@/types";
import { FC } from "react";
import styles from "./middle.module.scss";

const Middle: FC<MiddleProps> = ({ averageGrade, characteristics, reviewCount, name }) => {

    return (
        <section className={styles.middle}>
            <h3 className={styles.name}>{name}</h3>

            <div className={styles.reviews}>
                <div className={styles.stars}>
                    {[1, 2, 3, 4, 5].map(star => (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M8.52447 1.28091C8.67415 0.820253 9.32585 0.820253 9.47553 1.28091L11.1329 6.38172C11.1998 6.58773 11.3918 6.72721 11.6084 6.72721H16.9717C17.4561 6.72721 17.6575 7.34702 17.2656 7.63172L12.9266 10.7842C12.7514 10.9115 12.678 11.1372 12.745 11.3432L14.4023 16.444C14.552 16.9047 14.0248 17.2877 13.6329 17.003L9.29389 13.8506C9.11865 13.7232 8.88135 13.7232 8.70611 13.8506L4.3671 17.003C3.97524 17.2877 3.448 16.9047 3.59768 16.444L5.25503 11.3432C5.32197 11.1372 5.24864 10.9115 5.07339 10.7842L0.734384 7.63172C0.342527 7.34702 0.543915 6.72721 1.02828 6.72721H6.39159C6.6082 6.72721 6.80018 6.58773 6.86712 6.38172L8.52447 1.28091Z" fill={star <= averageGrade ? "#F3BE00" : "#BFBFBF"} />
                        </svg>
                    ))}
                </div>
                <p className={styles.count}>{reviewCount} {getDeclination(reviewCount, ["отзыв", "отзыва", "отзывов"])}</p>
            </div>

            <div className={styles.characteristics}>
                {characteristics.map(char => (
                    <div>
                        {char.icon}
                        <p className={styles.info}>
                            {char.info}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default Middle;