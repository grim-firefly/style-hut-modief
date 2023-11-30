import * as React from 'react';
import DashboardLayout from '../../../components/Layout/DashboardLayout';
import { products as ProductData } from '../../../fakeData/products';
import DataTable from '../../../components/Table/DataTable';
import { ProductTableColumns } from '../../../components/Table/ProductTableColumns';
import Link from 'next/link';

const Products = (props: any) => {
    const [columnVisibility, setColumnVisibility] = React.useState({
        color: false,
        details: false,
        description: false,
        reviews: false,
        rating: false,
    });

    return (
        <DashboardLayout>
            <div className="p-5 md:p-8">
                <div className="border-b border-dashed mb-5">
                    <h3 className="mb-2">Orders Details</h3>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center justify-end  gap-2 md:gap-3 py-3">
                        <TabLink
                            href="/dashboard/products/add"
                            title="+ Add Products"
                            active={true}
                        />
                    </div>
                </div>

                {/* order lists */}
                <div className="mt-3">
                    <DataTable
                        defaultColumns={ProductTableColumns}
                        data={ProductData}
                        columnVisibility={columnVisibility}
                        setColumnVisibility={setColumnVisibility}
                    />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Products;

const TabLink = ({ href = '#', title = '', active = false }) => {
    return (
        <Link
            href={href}
            className={`font-medium px-3 py-1 rounded-md text-xs md:text-sm bg-blue-500 hover:bg-blue-600 text-blue-50 transition-colors ease-linear duration-200
            }`}
        >
            {title}
        </Link>
    );
};
