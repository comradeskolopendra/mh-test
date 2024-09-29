import { BottomProps } from "@/types";
import { FC, memo, useState } from "react";

import styles from "./bottom.module.scss";
import { getConvertedMoney } from "@/helpers";

const Bottom: FC<BottomProps> = memo(({ price, priceWithDiscount }) => {
    const [amount, setAmount] = useState(4);
    const [isLovely, setIsLovely] = useState(false);

    const handleMinus = () => {
        setAmount(prev => prev === 1 ? prev : prev - 1);
    };

    const handlePlus = () => {
        setAmount(prev => prev + 1);
    };

    const handleSetLovely = () => {
        setIsLovely(prev => !prev);
    }

    return (
        <section className={styles.bottom}>
            <div>
                <p className={styles.discountPrice}>{getConvertedMoney(price * amount)}</p>
                <p className={styles.price}>{getConvertedMoney(priceWithDiscount * amount)}</p>
            </div>

            <div className={styles.acitvities}>
                <div className={styles.controls}>
                    <div className={styles.controlAmount}>
                        <button onClick={handleMinus}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                <line x1="1" y1="5.81738" x2="11" y2="5.81738" stroke="#3A3A3A" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </button>

                        <p className={styles.amount}>
                            {amount}
                        </p>

                        <button onClick={handlePlus}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                <line x1="1" y1="6.81738" x2="11" y2="6.81738" stroke="#3A3A3A" stroke-width="2" stroke-linecap="round" />
                                <line x1="6" y1="11.8174" x2="6" y2="1.81738" stroke="#3A3A3A" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>

                    <button className={styles.inCart}>В корзину</button>
                </div>

                <button onClick={handleSetLovely} className={styles.setLovely}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                        <path d="M3.34473 11.2278C3.34473 7.72912 5.70537 4.81754 8.9159 4.81738H8.91615C11.0953 4.81748 12.9272 6.03834 13.6396 6.74655L14.3446 7.44752L15.0497 6.74652C15.762 6.03826 17.594 4.81738 19.7733 4.81738C22.9838 4.81738 25.3447 7.72898 25.3447 11.2278C25.3447 14.2309 24.1822 16.3334 22.1799 18.238C20.4372 19.8957 18.1179 21.353 15.3793 23.0736C15.0408 23.2864 14.6958 23.5031 14.3448 23.7247C13.9932 23.5027 13.6477 23.2857 13.3087 23.0726C10.5708 21.3523 8.25204 19.8953 6.50957 18.2379C4.50732 16.3334 3.34473 14.2309 3.34473 11.2278Z" stroke={isLovely ? "#F3BE00" : "#3A3A3A"} fill={isLovely ? "#F3BE00" : "transparent"} stroke-width="2" />
                    </svg>
                </button>
            </div>

            <button className={styles.buyButton}>Купить в 1 клик</button>
        </section>
    )
});

export default Bottom;