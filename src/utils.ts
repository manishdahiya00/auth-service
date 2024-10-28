export const calculateDiscount = (price: number, percentage: number) => {
    return (percentage / 100) * price;
};
