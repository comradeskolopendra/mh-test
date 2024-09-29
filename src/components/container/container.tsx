import { FC, ReactNode } from "react";
import styles from "./container.module.scss";

interface ContainerProps {
    children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
};

export default Container;