import Link from 'next/link';
import * as React from 'react';
import Pagination from '../components/Pagination';

const OrderLists = () => {
    const [activePage, setActivePage] = React.useState(1);
    return (
        <div>
            <div className="hidden md:flex items-center py-3">
                <div className="w-full px-2">
                    <h6>Invoice ID</h6>
                </div>
                <div className="w-full px-2">
                    <h6>Items</h6>
                </div>

                <div className="w-full px-2">
                    <h6>Price</h6>
                </div>

                <div className="w-full px-2">
                    <h6>Status</h6>
                </div>

                <div className="w-full px-2">
                    <h6>Actions</h6>
                </div>
            </div>

            <div className="md:py-3">
                {[...Array(8)].map((_, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col md:flex-row items-center px-3 md:px-0 py-4 odd:bg-slate-50 hover:bg-slate-100"
                    >
                        <div className="w-full px-2 mb-3 md:mb-0">
                            <Link
                                href="#"
                                className="block hover:text-blue-500"
                            >
                                324324234
                            </Link>
                            <span className="text-xs block text-gray-400">
                                12/34/3222
                            </span>
                        </div>
                        <div className="w-full px-2">
                            <span className="block text-sm">2 Items</span>
                        </div>

                        <div className="md:w-full px-2 absolute top-5 right-3 md:relative md:top-auto md:right-auto">
                            <span className="block font-semibold">$ 200</span>
                        </div>

                        <div className="md:w-full px-2 absolute bottom-5 right-3 md:relative md:bottom-auto md:right-auto">
                            <span className="block text-green-600 text-sm font-medium px-3 rounded-lg bg-green-100 w-fit">
                                Delivered
                            </span>
                        </div>

                        <div className="w-full flex items-center space-x-3 px-2 mt-2 md:mt-0">
                            <Link
                                href="#"
                                className="block hover:text-blue-500"
                            >
                                <i className="fi fi-rr-eye" />
                            </Link>

                            <Link
                                href="#"
                                className="block hover:text-blue-500"
                            >
                                <i className="fi fi-rr-edit" />
                            </Link>

                            <Link
                                href="#"
                                className="block hover:text-blue-500"
                            >
                                <i className="fi fi-rr-print" />
                            </Link>

                            <Link href="#" className="block hover:text-red-500">
                                <i className="fi fi-rr-trash" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-end mt-3">
                <Pagination
                    viewParPage={8}
                    totalItems={100}
                    currentPage={activePage}
                    onPageChange={(page) => setActivePage(page)}
                />
            </div>
        </div>
    );
};

export default OrderLists;
