import Link from 'next/link';
import React from 'react';
import DashboardLayout from '../../../../components/Layout/DashboardLayout';
import ProductCreateForm from '../../../../sections/ProductCreateForm';
import { useRouter } from 'next/router';

const Add = () => {
    const router = useRouter();

    const goBack = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        router.back();
    };

    return (
        <DashboardLayout>
            <div className="p-5 md:p-8">
                <div className="flex items-center justify-between border-b border-dashed pb-3 mb-5">
                    <h3 className="">+ Add Product</h3>
                    <Link
                        href="/dashboard/products"
                        className="py-1 px-3 bg-zinc-50 text-zinc-700 rounded-md hover:bg-zinc-100 transition-colors ease-linear duration-200"
                        onClick={goBack}
                    >
                        Back
                    </Link>
                </div>

                <ProductCreateForm />
            </div>
        </DashboardLayout>
    );
};

export default Add;
