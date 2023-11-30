import { Input } from '../Form';
import * as React from 'react';
import { CardNumberFormate, ExpireDateFormate } from '../../utils/PaymentUtils';

export const MasterCard = () => {
    const [cardNumber, setCardNumber] = React.useState('');
    const [cardHolder, setCardHolder] = React.useState('');
    const [expiryDate, setExpiryDate] = React.useState('');
    const [cvv, setCvv] = React.useState('');

    const handleCardNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\-/g, '');

        // input value is not number
        if (isNaN(Number(value))) {
            return;
        }

        setCardNumber(value.slice(0, 16));
    };

    return (
        <div className="py-10 w-full max-w-[450px]">
            <form className="grid grid-cols-12 gap-4">
                <div className="col-span-12">
                    <Input
                        type="text"
                        label="Card Holder"
                        value={cardHolder}
                        placeholder="John Doe"
                        className="bg-transparent border border-zinc-200 placeholder:text-sm"
                        onChange={(e) => setCardHolder(e.target.value)}
                    />
                </div>

                <div className="col-span-12">
                    <Input
                        type="text"
                        label="Card Number"
                        value={CardNumberFormate(cardNumber) || ''}
                        placeholder="1234-567-890-1234"
                        className="bg-transparent border border-zinc-200 placeholder:text-sm"
                        onChange={handleCardNumberInput}
                    />
                </div>

                <div className="col-span-6">
                    <Input
                        type="password"
                        label="CVV"
                        value={cvv}
                        placeholder="123"
                        className="bg-transparent border border-zinc-200 placeholder:text-sm"
                        onChange={(e) => setCvv(e.target.value)}
                    />
                </div>

                <div className="col-span-6">
                    <Input
                        type="text"
                        label="Expiry Date"
                        placeholder="MM/YY"
                        value={ExpireDateFormate(expiryDate) || ''}
                        className="bg-transparent border border-zinc-200 placeholder:text-sm"
                        onChange={(e) =>
                            setExpiryDate(
                                e.target.value.replace(/\//g, '').slice(0, 4),
                            )
                        }
                    />
                </div>
            </form>
        </div>
    );
};
