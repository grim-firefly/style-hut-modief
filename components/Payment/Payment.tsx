import Image from 'next/image';
import React from 'react';
import { MasterCard } from './MasterCard';
import { Method } from './Method';

const Payment = () => {
    const [selectedMethod, setSelectedMethod] = React.useState('mastercard');

    return (
        <div>
            <div className="flex items-center flex-wrap gap-3">
                <Method
                    imageSrc="/payment-icon/mastercard.svg"
                    alt="masterCardIcon"
                    onClick={() => setSelectedMethod('mastercard')}
                    active={selectedMethod === 'mastercard'}
                />

                <Method
                    imageSrc="/payment-icon/visa.svg"
                    alt="visaIcon"
                    onClick={() => setSelectedMethod('visa')}
                    active={selectedMethod === 'visa'}
                />

                <Method
                    imageSrc="/payment-icon/paypal.svg"
                    alt="paypalIcon"
                    onClick={() => setSelectedMethod('paypal')}
                    active={selectedMethod === 'paypal'}
                />

                <Method
                    imageSrc="/payment-icon/apple-pay.svg"
                    alt="applePayIcon"
                    onClick={() => setSelectedMethod('apple-pay')}
                    active={selectedMethod === 'apple-pay'}
                />
            </div>

            {/* switch method */}
            <div>
                <MasterCard />
            </div>
        </div>
    );
};

export default Payment;
