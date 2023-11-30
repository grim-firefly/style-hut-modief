export const formatPhoneNumber = (phoneNumber: string) => {
    if (phoneNumber) {
        const phone = phoneNumber
            .replace(/[^\d(3)][^\d(4)]/g, '')
            .replace(/(\d{3})(\d{4})/, '$1-$2');

        return phone;
    }

    return null;
};
