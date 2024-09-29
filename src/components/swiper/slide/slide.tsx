import type { SlideProps } from "@/types";
import { FC, memo } from "react";
import styles from "./slide.module.scss";

import Bottom from "./bottom/bottom";
import Middle from "./middle/middle";
import Top from "./top/top";

const Slide: FC<SlideProps> = ({
    adventages,
    image,
    averageGrade,
    characteristics,
    name,
    price,
    priceWithDiscount,
    reviewCount
}) => {
    return (
        <article>
            <Top
                image={image}
                adventages={adventages}
            />
            <div className={styles.info}>
                <Middle
                    averageGrade={averageGrade}
                    characteristics={characteristics}
                    name={name}
                    reviewCount={reviewCount}
                />
                <Bottom
                    price={price}
                    priceWithDiscount={priceWithDiscount}
                />
            </div>
        </article>
    )
};

export default Slide;