import { FC, memo } from "react";
import { TopProps } from "@/types";
import styles from "./top.module.scss";


const Top: FC<TopProps> = ({ adventages, image }) => {
    return (
        <section className={styles.top}>
            <img src={image} className={styles.image} />
            <div className={styles.adventages}>
                {adventages.map((adventage) => (
                    adventage
                ))}
            </div>
        </section>
    )
};

export default Top;