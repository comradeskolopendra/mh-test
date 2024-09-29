import { ReactNode } from "react";

export interface TopProps {
    image: string;
    adventages: ReactNode[];
}

export interface MiddleProps {
    name: string;
    reviewCount: number;
    averageGrade: 1 | 2 | 3 | 4 | 5;
    characteristics: {
        icon: ReactNode;
        info: string;
    }[];
}

export interface BottomProps {
    price: number;
    priceWithDiscount: number;
}

export type SlideProps = BottomProps & MiddleProps & TopProps;