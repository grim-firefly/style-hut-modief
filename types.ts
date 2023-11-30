export type CustomerDataTypes = {
    id: number;
    name: string;
    email: string;
    dateOfBirth: string;
    phone: string;
    image: string;
    gender: string;
    address: {
        street: string;
        city: string;
        zip: string;
        state: string;
    };
};
