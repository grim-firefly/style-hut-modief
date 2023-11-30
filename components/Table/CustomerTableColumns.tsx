import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import { CustomerDataTypes } from '../../types';
import { IndeterminateCheckbox } from './IndeterminateCheckbox';

export const CustomerTableColumns: ColumnDef<CustomerDataTypes>[] = [
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
    {
        id: 'id',
        header: 'ID',
        cell: ({ row }: any) => <div className="px-1">{row.original.id}</div>,
    },

    // iamge
    {
        id: 'image',
        header: 'Image',
        cell: ({ row }: any) => (
            <div className="px-1">{row.original.image}</div>
        ),
    },

    // name
    {
        id: 'name',
        header: 'Name',
        cell: ({ row }: any) => <div className="px-1">{row.original.name}</div>,
    },

    // email
    {
        id: 'email',
        header: 'Email',
        cell: ({ row }: any) => (
            <div className="px-1">{row.original.email}</div>
        ),
    },

    // phone
    {
        id: 'phone',
        header: 'Phone',
        cell: ({ row }: any) => (
            <div className="px-1">{row.original.phone}</div>
        ),
    },
    {
        id: 'gender',
        header: 'Gender',
        cell: ({ row }: any) => (
            <div className="px-1">{row.original.gender}</div>
        ),
    },

    // address
    {
        id: 'address',
        header: 'Address',
        cell: ({ row }: any) => (
            <div className="px-1">
                {row.original.address.street}, {row.original.address.city},{' '}
                {row.original.address.state}, {row.original.address.country}
            </div>
        ),
    },

    // action
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
