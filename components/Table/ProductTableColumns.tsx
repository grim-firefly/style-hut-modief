import { createColumnHelper } from '@tanstack/react-table';
import { products } from '../../fakeData/products';
import Link from 'next/link';
import * as React from 'react';
import _ from 'lodash';
import Rating from '../Rating';
import Image from 'next/image';
import Dropdown from '../Dropdown';
import { IndeterminateCheckbox } from './IndeterminateCheckbox';

const columnHelper = createColumnHelper<typeof products[0]>();

export const ProductTableColumns = [
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

    // title
    columnHelper.accessor('title', {
        cell: (info) => <span>{info.getValue()}</span>,
        header: 'Title',
    }),

    //images
    columnHelper.accessor('images', {
        cell: (info) => (
            <div className="flex items-center gap-2 text-sm">
                {info.getValue().map((image, index) => (
                    <div key={index} className="relative w-10 h-10">
                        <Image src={image} alt="images" fill sizes="40px" />
                    </div>
                ))}
            </div>
        ),
        header: 'Images',
    }),

    // price
    columnHelper.accessor('price', {
        cell: (info) => (
            <span className="font-semibold">$ {info.getValue()}</span>
        ),
        header: 'Price',
    }),

    // category
    columnHelper.accessor('category', {
        cell: (info) => (
            <div className="flex items-center gap-2 text-sm">
                <span>main: {info.getValue().main}, </span>
                <span>sub: {info.getValue().sub}</span>
            </div>
        ),
        header: 'Category',
    }),

    // brand
    columnHelper.accessor('brand', {
        cell: (info) => <span>{info.getValue()}</span>,
        header: 'Brand',
    }),

    // discount
    columnHelper.accessor('discount', {
        cell: (info) => <span>{info.getValue()}</span>,
        header: 'Discount',
    }),

    // color

    columnHelper.accessor('color', {
        cell: (info) => (
            <div className="flex items-center gap-2 text-sm">
                {info.getValue().map((color, index) => (
                    <div
                        className="w-4 h-4 rounded-full"
                        key={index}
                        style={{ backgroundColor: color }}
                    />
                ))}
            </div>
        ),
        header: 'Color',
    }),

    // stock
    columnHelper.accessor('stock', {
        cell: (info) => <span>{info.getValue()}</span>,
        header: 'Stock',
    }),

    // gender
    columnHelper.accessor('gender', {
        cell: (info) => <span>{info.getValue()}</span>,
        header: 'Gender',
    }),

    // rating
    columnHelper.accessor('rating', {
        cell: (info) => (
            <div className="flex items-center gap-2 text-sm">
                <Rating rating={info.getValue()} iconClassName="w-2.5 h-2.5" />
                {info.getValue()}
            </div>
        ),
        header: 'Rating',
    }),

    // review
    columnHelper.accessor('reviews', {
        cell: (info) => (
            <div className="flex items-center gap-2 text-sm">
                <span> {info.getValue()} </span>
            </div>
        ),
        header: 'Reviews',
    }),

    // warrenty
    columnHelper.accessor('warrenty', {
        cell: (info) => <span> {info.getValue()} </span>,
        header: 'Warrenty',
    }),

    // shipping
    columnHelper.accessor('shipping', {
        cell: (info) => <span> {info.getValue()} </span>,
        header: 'Shipping',
    }),

    //tags
    columnHelper.accessor('tags', {
        cell: (info) => (
            <div className="max-w-[250px] overflow-hidden whitespace-normal gap-2 text-xs">
                {info.getValue().join(',')}
            </div>
        ),
        header: 'Tags',
    }),

    // details
    columnHelper.accessor('details', {
        cell: (info) => (
            <Dropdown>
                <Dropdown.Toggle>
                    <p className="min-w-[150px] text-xs max-w-[400px] whitespace-normal overflow-hidden line-clamp-2">
                        {info.getValue()}
                    </p>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <div className="flex flex-col gap-2 w-96 max-h-fit shadow-lg bg-white whitespace-normal p-3 rounded-md text-xs">
                        {info.getValue()}
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        ),
        header: 'Details',
    }),

    // description
    columnHelper.accessor('description', {
        cell: (info) => (
            <Dropdown>
                <Dropdown.Toggle>
                    <p className="min-w-[150px] text-xs max-w-[400px] whitespace-normal overflow-hidden line-clamp-2">
                        {info.getValue()}
                    </p>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <div className="flex flex-col gap-2 w-96 max-h-fit shadow-lg bg-white whitespace-normal p-3 rounded-md text-xs">
                        {info.getValue()}
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        ),
        header: 'Description',
    }),

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
