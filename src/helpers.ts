
// amount - количество,
// words - массив просклоненных слов. 1 - ов, 2 - ва, 3 - вов
export const getDeclination = (amount: number, words: string[]): string => {
    const lastNum = amount % 10;

    if (lastNum === 1) {
        return words[0]
    } else if (lastNum > 1 && lastNum < 5) {
        return words[1];
    } else {
        return words[2];
    }
}

export const getConvertedMoney = (money: number) => {
    return `${new Intl.NumberFormat("ru-RU").format(money)} ₽`;
}