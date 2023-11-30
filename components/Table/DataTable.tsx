import * as React from 'react';

import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
} from '@tanstack/react-table';
import Link from 'next/link';
import { Input } from '../Form';
import _ from 'lodash';
import Dropdown from '../Dropdown';

// DataTable  component
const DataTable = ({
    defaultColumns,
    data,
    columnVisibility = {},
    setColumnVisibility,
}: any) => {
    const [columns, setColumns] = React.useState<typeof defaultColumns>([
        ...defaultColumns,
    ]);

    const [selectedRows, setSelectedRows] = React.useState({});
    const [tableData, setTableData] = React.useState<typeof data>([...data]);

    const defaultColumnsChange = React.useMemo(() => {
        return defaultColumns;
    }, [defaultColumns]);

    const defaultTableData = React.useMemo(() => {
        return data;
    }, [data]);

    /// set default columns
    React.useEffect(() => {
        setColumns([...defaultColumnsChange]);
        setTableData([...defaultTableData]);
    }, [defaultColumnsChange, defaultTableData]);

    const table = useReactTable({
        data: tableData,
        columns: columns,
        state: {
            columnVisibility,
            rowSelection: selectedRows,
        },
        getCoreRowModel: getCoreRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onRowSelectionChange: setSelectedRows,
    });

    if (!table) return null;

    return (
        <div className="h-fit">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                <div className="w-full max-w-[250px]">
                    <Input
                        type="text"
                        placeholder="Search"
                        className="w-full border text-sm"
                    />
                </div>

                <div className=" flex items-center space-x-3">
                    {_.isEmpty(selectedRows) ? null : (
                        <div className="flex items-center space-x-3">
                            {/* edit */}
                            <button
                                type="button"
                                className="font-medium flex items-center text-sm px-5 gap-2 py-2 rounded-md border border-dashed hover:bg-slate-200"
                            >
                                <i className="fi fi-rr-edit sm:text-xs -mb-1 " />
                                <span className="hidden md:flex">Edit</span>
                            </button>

                            {/* delete */}

                            <button
                                type="button"
                                className="font-medium flex items-center text-sm px-5 gap-2 py-2 rounded-md border border-dashed hover:bg-slate-200"
                            >
                                <i className="fi fi-rr-trash sm:text-xs -mb-1 " />
                                <span className="hidden md:flex">Delete</span>
                            </button>
                        </div>
                    )}

                    {/* filter button */}
                    <Dropdown placement="bottom-end">
                        <Dropdown.Toggle className="flex items-center space-x-2">
                            <button
                                type="button"
                                className="font-medium flex items-center text-sm px-5 gap-2 py-2 rounded-md border border-dashed"
                            >
                                <i className="fi fi-rr-settings-sliders sm:text-xs -mb-1 " />
                                <span className="hidden md:flex">Filter</span>
                            </button>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <div className="p-4 bg-white shadow-lg rounded-md">
                                {table?.getAllLeafColumns()?.map((column) => {
                                    return (
                                        <div key={column.id} className="px-1">
                                            <label className="flex items-center gap-2">
                                                <input
                                                    {...{
                                                        type: 'checkbox',
                                                        checked:
                                                            column.getIsVisible(),
                                                        onChange:
                                                            column.getToggleVisibilityHandler(),
                                                    }}
                                                />
                                                {_.upperFirst(column.id)}
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>

                    {/* export button */}
                    <Dropdown placement="bottom-end">
                        <Dropdown.Toggle className="flex items-center space-x-2">
                            <button
                                type="button"
                                className="font-medium flex items-center text-sm gap-2 px-5 py-2 rounded-md border border-dashed"
                            >
                                <i className="fi fi-rr-print -mb-1" />
                                <span className="hidden md:flex">Export</span>
                            </button>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <div className="p-4 bg-white shadow-lg rounded-md">
                                <div>
                                    <Link
                                        href="#"
                                        className="block p-2 hover:bg-slate-100 rounded-md"
                                    >
                                        Microsoft Word (.docx)
                                    </Link>

                                    <Link
                                        href="#"
                                        className="block p-2 hover:bg-slate-100 rounded-md"
                                    >
                                        Microsoft Excel (.xlsx)
                                    </Link>

                                    <Link
                                        href="#"
                                        className="block p-2 hover:bg-slate-100 rounded-md"
                                    >
                                        PDF document (.pdf)
                                    </Link>

                                    <Link
                                        href="#"
                                        className="block p-2 hover:bg-slate-100 rounded-md"
                                    >
                                        Print
                                    </Link>
                                </div>
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

            {/* data table */}
            <div>
                <div className="border max-w-screen overflow-x-auto mt-5">
                    <div className="w-full overflow-x-auto">
                        <table className="table-auto">
                            <thead>
                                {table
                                    ?.getHeaderGroups()
                                    ?.map((headerGroup) => (
                                        <tr key={headerGroup.id}>
                                            {headerGroup?.headers?.map(
                                                (header) => (
                                                    <th
                                                        key={header.id}
                                                        className="bg-slate-200 py-2 px-4 text-left"
                                                    >
                                                        {header.isPlaceholder
                                                            ? null
                                                            : flexRender(
                                                                  header.column
                                                                      .columnDef
                                                                      .header,
                                                                  header.getContext(),
                                                              )}
                                                    </th>
                                                ),
                                            )}
                                        </tr>
                                    ))}
                            </thead>

                            <tbody>
                                {table?.getRowModel()?.rows?.map((row) => (
                                    <tr
                                        key={row.id}
                                        className="even:bg-slate-50/80 hover:bg-slate-50"
                                    >
                                        {row.getVisibleCells()?.map((cell) => (
                                            <td
                                                key={cell.id}
                                                className="py-2 px-4 text-left"
                                            >
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext(),
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* pagination */}
            <div className="py-5">
                <div className="flex items-center flex-wrap gap-3 text-sm">
                    <button
                        className="border rounded p-1 flex items-center hover:bg-slate-100"
                        onClick={() => table.setPageIndex(0)}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <i className="fi fi-rr-angle-double-small-left -mb-1" />
                    </button>
                    <button
                        className="border rounded  p-1 flex items-center hover:bg-slate-100"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <i className="fi fi-rr-angle-small-left -mb-1" />
                    </button>
                    <button
                        className="border rounded  p-1 flex items-center hover:bg-slate-100"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        <i className="fi fi-rr-angle-small-right -mb-1" />
                    </button>
                    <button
                        className="border rounded  p-1 flex items-center hover:bg-slate-100"
                        onClick={() =>
                            table.setPageIndex(table.getPageCount() - 1)
                        }
                        disabled={!table.getCanNextPage()}
                    >
                        <i className="fi fi-rr-angle-double-small-right -mb-1" />
                    </button>
                    <span className="flex items-center gap-1">
                        <div>Page</div>
                        <strong>
                            {table.getState().pagination.pageIndex + 1} of{' '}
                            {table.getPageCount()}
                        </strong>
                    </span>
                    <span className="flex items-center gap-1">
                        | Go to page:
                        <input
                            type="number"
                            defaultValue={
                                table.getState().pagination.pageIndex + 1
                            }
                            onChange={(e) => {
                                const page = e.target.value
                                    ? Number(e.target.value) - 1
                                    : 0;
                                table.setPageIndex(page);
                            }}
                            className="border p-1 rounded w-16"
                        />
                    </span>
                    <select
                        value={table.getState().pagination.pageSize}
                        onChange={(e) => {
                            table.setPageSize(Number(e.target.value));
                        }}
                    >
                        {[10, 20, 30, 40, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default DataTable;
