export const ExpireDateFormate = (date: string) => {
    return date.replace(/(\d{2})(\d{2})/g, '$1/$2');
};

export const CardNumberFormate = (number: string) => {
    return number.replace(/(\d{4})/g, '$1-').replace(/-$/, '');
};
