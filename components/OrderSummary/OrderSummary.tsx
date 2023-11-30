import React from 'react';
import { Input } from '../Form';

const OrderSummary = () => {
    return (
        <div>
            <div className="px-8 lg:px-0">
                <div className="flex items-center justify-between border-b border-dashed py-2">
                    <h5>Order Summary</h5>
                </div>
                <div className="py-4 flex flex-col space-y-3 border-b border-dashed">
                    <div className="flex items-center justify-between">
                        <span className="text-base">Sub Total</span>
                        <span className="text-base">$720</span>
                    </div>
                    {/* shipping cost */}
                    <div className="flex items-center justify-between">
                        <span className="text-base">Shipping Cost</span>
                        <span className="text-base">$20</span>
                    </div>

                    {/*  Voucher Discount */}
                    <div className="flex items-center justify-between">
                        <span className="text-base whitespace-nowrap">
                            Voucher Discount
                        </span>
                        <span className="text-base text-teal-500  whitespace-nowrap">
                            -20% ($20)
                        </span>
                    </div>
                </div>
                <div>
                    {/* shipping cost */}
                    <div className="flex items-center justify-between mt-2">
                        <span className="text-base font-bold text-gray-700">
                            Total Cost
                        </span>
                        <span className="text-base font-bold text-gray-700">
                            $720
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
