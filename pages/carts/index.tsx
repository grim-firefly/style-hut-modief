import Link from 'next/link';
import React from 'react';
import { Cart } from '../../components/Cart';
import { Input } from '../../components/Form';
import Layout from '../../components/Layout/Layout';
import OrderSummary from '../../components/OrderSummary';

const Carts = () => {
    const [subTotal, setSubTotal] = React.useState(0);

    return (
        <Layout>
            <div className="container py-8">
                <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-12 lg:col-span-8 xl:col-span-9 lg:border-r border-dashed">
                        <div className="px-8">
                            <div className="flex items-center justify-between border-b border-dashed py-2">
                                <h5>My Carts</h5>
                                <span>5 Items</span>
                            </div>

                            <div className="py-3">
                                <Cart />
                                <Cart />
                                <Cart />
                                <Cart />
                            </div>
                        </div>
                    </div>

                    {/* check out summary */}
                    <div className="col-span-12 lg:col-span-4 xl:col-span-3">
                        <OrderSummary />
                        <div className="mt-8 px-8 lg:px-0">
                            <div className="">
                                <label htmlFor="">
                                    <span className="block mb-3 text-sm font-medium text-gray-500">
                                        Gift Card/Voucher code
                                    </span>
                                </label>
                                <div className="flex items-center space-x-3">
                                    <Input
                                        type="text"
                                        className="bg-white border border-dashed border-gray-300 py-2 hover:ring-0"
                                    />
                                    <button className="py-2 px-5 border border-blue-50 bg-blue-50 text-blue-500 hover:bg-blue-500 hover:text-blue-50 rounded-md transition-colors duration-300">
                                        Apply
                                    </button>
                                </div>
                            </div>

                            <div className="mt-8">
                                <Link
                                    href="/carts/checkout"
                                    className="py-2 px-5 border border-blue-50 bg-blue-500 text-blue-50 hover:bg-blue-50 hover:text-blue-500 rounded-md transition-colors duration-300 w-full"
                                >
                                    Proceed to Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Carts;
