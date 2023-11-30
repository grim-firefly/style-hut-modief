import Link from 'next/link';
import React from 'react';
import DashboardLayout from '../../../components/Layout/DashboardLayout';
import { CustomerTableColumns } from '../../../components/Table/CustomerTableColumns';
import DataTable from '../../../components/Table/DataTable';
import { customers } from '../../../fakeData/customers';

const Customers = () => {
    const [columnVisibility, setColumnVisibility] = React.useState({});
    return (
        <DashboardLayout>
            <div className="p-5 md:p-8">
                <div className="border-b border-dashed mb-5">
                    <h3 className="mb-2">Orders Details</h3>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center flex-wrap gap-2 md:gap-3 py-3">
                        <TabLink href="#" title="All" active={true} />
                        <TabLink
                            href="#new-customers"
                            title="New Customers"
                            active={false}
                        />
                        <TabLink
                            href="#banned-customers"
                            title="Banned Customers"
                            active={false}
                        />
                    </div>
                </div>

                {/* data table */}
                <div>
                    <DataTable
                        defaultColumns={CustomerTableColumns}
                        data={customers}
                        columnVisibility={columnVisibility}
                        setColumnVisibility={setColumnVisibility}
                    />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Customers;

const TabLink = ({ href = '#', title = '', active = false }) => {
    return (
        <Link
            href={href}
            className={`font-medium px-3 py-1 rounded-md border border-dashed text-xs md:text-sm hover:bg-slate-500/10 hover:text-slate-500 ${
                active ? 'bg-slate-500/20 text-slate-700' : ''
            }`}
        >
            {title}
        </Link>
    );
};
