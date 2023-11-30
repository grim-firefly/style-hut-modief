import Link from 'next/link';
import * as React from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { orders as orderData } from '../../fakeData/orders';
import { OrderTableColumns } from '../../components/Table/OrderTableColumns';
import DataTable from '../../components/Table/DataTable';
import _ from 'lodash';

const Orders = () => {
    const [columnVisibility, setColumnVisibility] = React.useState({
        images: false,
        color: false,
    });
    return (
        <DashboardLayout>
            <div className="p-5 md:p-8">
                <div className="border-b border-dashed mb-5">
                    <h3 className="mb-2">Orders Details</h3>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center flex-wrap gap-2 md:gap-3 py-3">
                        <OrderLink href="#" title="New Orders" active={true} />
                        <OrderLink
                            href="#"
                            title="Verified Orders"
                            active={false}
                        />
                        <OrderLink
                            href="#"
                            title="Completed Orders"
                            active={false}
                        />
                        <OrderLink
                            href="#"
                            title="Canceled Orders"
                            active={false}
                        />
                        <OrderLink href="#" title="All Orders" active={false} />
                    </div>
                </div>

                {/* order lists */}
                <div className="mt-3">
                    <DataTable
                        defaultColumns={OrderTableColumns}
                        data={orderData}
                        columnVisibility={columnVisibility}
                        setColumnVisibility={setColumnVisibility}
                    />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Orders;

const OrderLink = ({ href = '#', title = '', active = false }) => {
    return (
        <Link
            href={href}
            className={`font-medium px-3 py-1 rounded-md border border-dashed text-xs md:text-sm ${
                active ? 'bg-slate-500/20 text-slate-700' : ''
            }`}
        >
            {title}
        </Link>
    );
};
