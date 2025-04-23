import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, Funnel } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";

import { tableData } from "@/lib/constants";

export const columns: ColumnDef<tableDataParams>[] = [
  {
    accessorKey: "sl",
    header: () => <p className="text-center">SL</p>,
    cell: ({ row }) => (
      <p className="text-center font-bold">{row.getValue("sl")}</p>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "nbfcId",
    header: () => <p className="text-center">NBFC ID</p>,
    cell: ({ row }) => (
      <div className="text-center uppercase">{row.getValue("nbfcId")}</div>
    ),
  },
  {
    accessorKey: "appId",
    header: () => <p className="text-center">App ID</p>,
    cell: ({ row }) => (
      <div className="text-center uppercase">{row.getValue("appId")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: () => <p className="text-center">Status</p>,
    cell: ({ row }) => (
      <div className="text-center capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: () => <p className="text-center">Name</p>,
    cell: ({ row }) => (
      <div className="text-center capitalize">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "tenure",
    header: () => <p className="text-center">Tenure</p>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("tenure")}</div>
    ),
  },
  {
    accessorKey: "nbfcDisbursedAmount",
    header: () => <p className="text-center">NBFC Disbursed Amount</p>,
    cell: ({ row }) => (
      <div className="text-center">₹ {row.getValue("nbfcDisbursedAmount")}</div>
    ),
  },
  {
    accessorKey: "posAmount",
    header: () => <p className="text-center">POS Amount</p>,
    cell: ({ row }) => (
      <div className="text-center">₹ {row.getValue("posAmount")}</div>
    ),
  },
];

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");

  const table = useReactTable({
    data: tableData,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: (row, _colId, filterValue) => {
      const search = filterValue.toLowerCase();
      return row
        .getAllCells()
        .some((cell) => String(cell.getValue()).toLowerCase().includes(search));
    },
  });

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-white shadow-sm rounded-lg mb-4">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-700">
            Loan Application List
          </h2>
          <div className="flex items-center gap-2">
            <Input
              placeholder="Search…"
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
              className="bg-[#C3EEFF] border border-[#BBDFFF] text-sm w-[240px] focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <p className="text-[#C3EEFF] scale-250 w-[1px]">|</p>
            <Button
              variant="outline"
              className="text-[#0A4DA2] border-none p-0"
            >
              <ArrowUpDown />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="text-[#0A4DA2] border-none p-0"
                >
                  <Funnel />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((col) => col.getCanHide())
                  .map((column) => (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(val) => column.toggleVisibility(!!val)}
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Table */}
        <div className="rounded-md border border-[#D1E9FF]">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id} className="text-sm font-bold">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.length > 0 ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="text-sm">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination with ellipses */}
      <div className="flex items-center justify-center py-4 mr-25">
        {/* Current page indicator */}
        <div className="mr-4 text-sm text-gray-600 min-w-[100px]">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                className={
                  table.getCanPreviousPage()
                    ? "mr-2"
                    : "opacity-50 pointer-events-none mr-2"
                }
                onClick={() =>
                  table.getCanPreviousPage() && table.previousPage()
                }
              />
            </PaginationItem>
            <PaginationLink
              onClick={() => table.setPageIndex(0)}
              className={
                table.getState().pagination.pageIndex === 0
                  ? "page-active1"
                  : "page-inactive1"
              }
            >
              1
            </PaginationLink>

            {(table.getState().pagination.pageIndex <= 3 ||
              table.getState().pagination.pageIndex ===
                table.getPageCount() - 1) && (
              <>
                {[1, 2, 3].map((pageIndex) => (
                  <PaginationItem key={pageIndex}>
                    <PaginationLink
                      onClick={() => table.setPageIndex(pageIndex)}
                      className={
                        table.getState().pagination.pageIndex === pageIndex
                          ? "page-active"
                          : "page-inactive"
                      }
                    >
                      {pageIndex + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
              </>
            )}

            <PaginationEllipsis className="page-inactive" />
            {table.getState().pagination.pageIndex >= 4 &&
              table.getState().pagination.pageIndex < 7 && (
                <>
                  {[4, 5, 6].map((pageIndex) => (
                    <PaginationItem key={pageIndex}>
                      <PaginationLink
                        onClick={() => table.setPageIndex(pageIndex)}
                        className={
                          table.getState().pagination.pageIndex === pageIndex
                            ? "page-active"
                            : "page-inactive"
                        }
                      >
                        {pageIndex + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationEllipsis className="page-inactive" />
                </>
              )}

            {table.getState().pagination.pageIndex >= 7 &&
              table.getState().pagination.pageIndex < 9 && (
                <>
                  {[7, 8].map((pageIndex) => (
                    <PaginationItem key={pageIndex}>
                      <PaginationLink
                        onClick={() => table.setPageIndex(pageIndex)}
                        className={
                          table.getState().pagination.pageIndex === pageIndex
                            ? "page-active"
                            : "page-inactive"
                        }
                      >
                        {pageIndex + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                </>
              )}

            <PaginationLink
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              className={
                table.getState().pagination.pageIndex ===
                table.getPageCount() - 1
                  ? "page-active-last"
                  : "page-inactive-last"
              }
            >
              {table.getPageCount()}
            </PaginationLink>
            <PaginationItem>
              <PaginationNext
                className={
                  table.getCanNextPage()
                    ? "ml-2"
                    : "opacity-50 pointer-events-none ml-2"
                }
                onClick={() => table.getCanNextPage() && table.nextPage()}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
