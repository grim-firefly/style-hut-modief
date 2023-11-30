import { createColumnHelper } from '@tanstack/react-table';
import { orders } from '../../fakeData/orders';
import Link from 'next/link';
import * as React from 'react';
import _ from 'lodash';

const Status = {
    pending: 'bg-orange-500/10 text-orange-500',
    shipped: 'bg-green-500/10 text-green-500',
    paid: 'bg-green-500/10 text-green-500',
    delivered: 'bg-blue-500/10 text-blue-500',
    canceled: 'bg-red-500/10 text-red-500',
};

const paymentMehod = {
    paypal: 'fi fi-brands-paypal text-gray-500 -mb-1.5',
    credit: 'bg-green-500/10 text-green-500',
    visa: 'fi fi-brands-visa text-gray-500 text-4xl -mb-1.5',
    applepay: 'fi fi-brands-apple-pay text-gray-500 text-4xl -mb-1.5',
};

const columnHelper = createColumnHelper<typeof orders[0]>();

export const OrderTableColumns = [
    // select all
    {
        id: 'select',
        header: ({ table }: any) => (
            <IndeterminateCheckbox
                {...{
                    checked: table.getIsAllRowsSelected(),
                    indeterminate: table.getIsSomeRowsSelected(),
                    onChange: table.getToggleAllRowsSelectedHandler(),
                }}
            />
        ),
        cell: ({ row }: any) => (
            <div className="px-1">
                <IndeterminateCheckbox
                    {...{
                        checked: row.getIsSelected(),
                        indeterminate: row.getIsSomeSelected(),
                        onChange: row.getToggleSelectedHandler(),
                    }}
                />
            </div>
        ),
    },

    // id
    columnHelper.accessor('id', {
        cell: (info) => <span>{info.getValue()}</span>,
        header: 'ID',
    }),

    // invoice id
    columnHelper.accessor('invoiceId', {
        cell: (info) => (
            <Link href="#" className="font-semibold">
                {info.getValue()}
            </Link>
        ),
        header: 'Invoice ID',
    }),

    // price
    columnHelper.accessor('date', {
        cell: (info) => info.getValue(),
        header: 'Order Created',
    }),

    // customer name
    columnHelper.accessor('customer', {
        cell: (info) => info.getValue().name,
        header: 'Customer Name',
    }),

    // products
    columnHelper.accessor('products', {
        cell: (info) => <span>{info.getValue().length} items</span>,
        header: 'Products',
    }),

    // Shipping Phone
    columnHelper.accessor('shipping.phone', {
        cell: (info) => (
            <span className="flex items-center text-xm">
                ({info.getValue().code}) {info.getValue().number}
            </span>
        ),
        header: 'Shipping Phone',
    }),

    // Shipping Address
    columnHelper.accessor('shipping.address', {
        cell: (info) => (
            <span className="flex items-center text-xm">{info.getValue()}</span>
        ),

        header: 'Shipping Address',
    }),

    // price
    columnHelper.accessor('total', {
        cell: (info) => (
            <span className="font-semibold">${info.getValue()}</span>
        ),
        header: 'Total Price',
    }),

    // Payment Status
    columnHelper.accessor('payment.status', {
        cell: (info) => (
            <span
                className={`
                px-3 py-0.5 text-xs font-semibold w-fit flex items-center rounded-md
                ${Status[info.getValue() as keyof typeof Status]}`}
            >
                {_.upperFirst(info.getValue())}
            </span>
        ),
        header: 'Payment Status',
    }),

    // Payment Method
    columnHelper.accessor('payment.method', {
        cell: (info) => (
            <span className="flex items-center space-x-1">
                <i
                    className={
                        paymentMehod[
                            info
                                .getValue()
                                .toLowerCase() as keyof typeof paymentMehod
                        ]
                    }
                />
                <span className="text-sm font-medium text-gray-500">
                    {info.getValue() === 'Paypal'
                        ? (info.getValue() as string)
                        : null}
                </span>
            </span>
        ),
        header: 'Payment Method',
    }),

    // Product Status
    columnHelper.accessor('status', {
        cell: (info) => (
            <span
                className={`
                px-3 py-0.5 text-xs font-semibold w-fit flex items-center rounded-md
                ${Status[info.getValue() as keyof typeof Status]}`}
            >
                {_.upperFirst(info.getValue())}
            </span>
        ),
        header: 'Status',
    }),

    // Product Status
    {
        id: 'action',
        header: 'Action',
        cell: ({ row }: any) => (
            <div className="flex items-center space-x-2">
                <Link href="#" className="p-1 rounded-md text-sm font-medium">
                    <i className="fi fi-rr-edit" />
                </Link>
                <Link
                    href="#"
                    className="p-1 rounded-md text-sm font-medium ml-2"
                >
                    <i className="fi fi-rr-trash" />
                </Link>

                <Link
                    href="#"
                    className="p-1 rounded-md text-sm font-medium ml-2"
                >
                    <i className="fi fi-rr-print" />
                </Link>
            </div>
        ),
    },
];

// IndeterminateCheckbox

const IndeterminateCheckbox = ({
    indeterminate,
    className = '',
    ...rest
}: { indeterminate?: boolean } & React.HTMLProps<HTMLInputElement>) => {
    const ref = React.useRef<HTMLInputElement>(null!);

    React.useEffect(() => {
        if (typeof indeterminate === 'boolean') {
            ref.current.indeterminate = !rest.checked && indeterminate;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref, indeterminate]);

    return (
        <input
            type="checkbox"
            ref={ref}
            className={className + ' cursor-pointer'}
            {...rest}
        />
    );
};
