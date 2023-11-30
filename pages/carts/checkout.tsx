import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Cart } from '../../components/Cart';
import { Input, PhoneNumberInput, SelectionInput } from '../../components/Form';
import Layout from '../../components/Layout/Layout';
import OrderSummary from '../../components/OrderSummary';
import Payment from '../../components/Payment';

const Checkout = () => {
    const [subTotal, setSubTotal] = React.useState(0);

    return (
        <Layout>
            <div className="container py-8">
                <div className="grid grid-cols-12 md:gap-10">
                    <div className="col-span-12 lg:col-span-8 xl:col-span-9 lg:border-r border-dashed">
                        <div className="px-4 lg:px-8">
                            <div>
                                <div className="flex items-center justify-between border-b border-dashed py-2">
                                    <h5>Checkout</h5>
                                </div>

                                {/* Personal Info */}
                                <div className="py-3">
                                    <div className="flex items-center justify-between py-2">
                                        <h5 className="text-zinc-600 font-medium">
                                            1. Personal Information
                                        </h5>
                                    </div>
                                    {/* contact Info */}
                                    <div className="py-3 flex flex-col gap-8">
                                        {/* name */}
                                        <div className="grid grid-cols-12 gap-6 lg:gap-8">
                                            <div className="col-span-12 md:col-span-6">
                                                <Input
                                                    type="text"
                                                    label="First Name"
                                                    className="bg-transparent border border-zinc-200"
                                                />
                                            </div>

                                            <div className="col-span-12 md:col-span-6">
                                                <Input
                                                    type="text"
                                                    label="First Name"
                                                    className="bg-transparent border border-zinc-200"
                                                />
                                            </div>
                                            <div className="col-span-12 md:col-span-6">
                                                <div>
                                                    <PhoneNumberInput />
                                                </div>
                                            </div>

                                            <div className="col-span-12 md:col-span-6">
                                                <Input
                                                    type="text"
                                                    label="Email"
                                                    className="bg-transparent border"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* shipping address */}
                                <div className="mt-8">
                                    <div className="flex flex-col py-2">
                                        <h5 className="text-zinc-600 font-medium">
                                            2. Shipping Address
                                        </h5>

                                        <div className="my-3">
                                            <div className="grid grid-cols-12 gap-6 lg:gap-8">
                                                <div className="col-span-12 md:col-span-6">
                                                    <Input
                                                        type="text"
                                                        label="City"
                                                        className="bg-transparent border border-zinc-200"
                                                    />
                                                </div>

                                                <div className="col-span-12 md:col-span-6">
                                                    <Input
                                                        type="text"
                                                        label="Zip Code"
                                                        className="bg-transparent border border-zinc-200"
                                                    />
                                                </div>

                                                <div className="col-span-12 lg:col-span-6">
                                                    <Input
                                                        type="text"
                                                        label="Address"
                                                        className="bg-transparent border border-zinc-200"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Payment address */}
                                <div className="mt-8">
                                    <div className="flex flex-col  py-2">
                                        <h5 className="text-zinc-600 font-medium">
                                            3. Payment Method
                                        </h5>

                                        <div className="my-3">
                                            <Payment />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* check out summary */}
                    <div className="col-span-12 lg:col-span-4 xl:col-span-3 ">
                        <div className="">
                            <div className="sticky top-0">
                                <OrderSummary />
                                <div className="mt-8 px-8 lg:px-0">
                                    <div className="mt-8">
                                        <Link
                                            href="/carts/checkout-success"
                                            className="py-2 px-5 border border-blue-50 bg-blue-500 text-blue-50 hover:bg-blue-600 hover:text-blue-50 rounded-md transition-colors duration-300 w-full"
                                        >
                                            Place Order
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Checkout;
