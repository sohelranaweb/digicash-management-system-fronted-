import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";
import { useAllTransactionsQuery } from "@/redux/features/admin/admin.api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

/* All Transaction history  */

function AllTransactionHistory() {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(5);
  const [filterType, setFilterType] = useState<string>("all"); // ✅ type filter
  const [filterStatus, setFilterStatus] = useState<string>("all"); // ✅ status filter

  const { data: trx } = useAllTransactionsQuery({
    page: currentPage,
    limit,
    ...(filterType !== "all" && { type: filterType }),
    ...(filterStatus !== "all" && { status: filterStatus }), // ✅ add status filter
  });

  const transactions = trx?.data;
  const totalPage = trx?.meta?.totalPage || 1;

  // Transaction type color mapping
  const txTypeColors: Record<
    string,
    "default" | "secondary" | "destructive" | "outline"
  > = {
    ADD_MONEY: "default",
    SEND_MONEY: "secondary",
    CASH_OUT: "destructive",
    CASH_IN: "outline",
  };

  return (
    <div className="">
      <Card className="shadow-md">
        <CardHeader className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <CardTitle className="text-xl font-bold">
            Transaction History
          </CardTitle>

          {/* Filter by Type */}

          <div className="flex flex-col w-[200px]">
            <label className="mb-1 text-sm font-medium text-gray-700">
              Filter by Type
            </label>
            <Select
              value={filterType}
              onValueChange={(val) => {
                setFilterType(val);
                setCurrentPage(1);
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="ADD_MONEY">Add Money</SelectItem>
                <SelectItem value="SEND_MONEY">Send Money</SelectItem>
                <SelectItem value="CASH_OUT">Cash Out</SelectItem>
                <SelectItem value="CASH_IN">Cash In</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Filter by Status */}
          <div className="flex flex-col w-[200px]">
            <label className="mb-1 text-sm font-medium text-gray-700">
              Filter by Status
            </label>
            <Select
              value={filterStatus}
              onValueChange={(val) => {
                setFilterStatus(val);
                setCurrentPage(1);
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="COMPLETED">Completed</SelectItem>
                <SelectItem value="PENDING">Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>

        <CardContent>
          <div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Fee</TableHead>
                  <TableHead>Commission</TableHead>
                  <TableHead>InitiatedBy</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions?.map((tx: any) => (
                  <TableRow key={tx._id}>
                    <TableCell className="font-mono">{tx._id}</TableCell>
                    <TableCell>
                      <Badge variant={txTypeColors[tx.type]}>{tx.type}</Badge>
                    </TableCell>
                    <TableCell>${tx.amount}</TableCell>
                    <TableCell>${tx.fee ?? "-"}</TableCell>
                    <TableCell>${tx.commission ?? "-"}</TableCell>
                    <TableCell>{tx.initiatedBy ?? "-"}</TableCell>
                    <TableCell>
                      {tx.createdAt
                        ? new Date(tx.createdAt).toLocaleString()
                        : "-"}
                    </TableCell>
                    <TableCell>{tx.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          {totalPage > 1 && (
            <div className="flex justify-end mt-4">
              <div>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                        className={
                          currentPage === 1
                            ? "pointer-events-none opacity-50"
                            : "cursor-pointer"
                        }
                      />
                    </PaginationItem>
                    {Array.from(
                      { length: totalPage },
                      (_, index) => index + 1
                    ).map((page) => (
                      <PaginationItem
                        key={page}
                        onClick={() => setCurrentPage(page)}
                      >
                        <PaginationLink isActive={currentPage === page}>
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem>
                      <PaginationNext
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                        className={
                          currentPage === totalPage
                            ? "pointer-events-none opacity-50"
                            : "cursor-pointer"
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default AllTransactionHistory;
