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
/* All Transaction history  */

function AllTransactions() {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(5);
  const { data: trx } = useAllTransactionsQuery({
    page: currentPage,
    limit,
  });
  console.log("allTrx", trx);

  const transactions = trx?.data;
  const totalPage = trx?.meta?.totalPage || 1;
  console.log("totalPage", totalPage);
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
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-bold">
            Transaction History
          </CardTitle>
        </CardHeader>
        <CardContent>
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
                <TableRow key={tx.trxId}>
                  <TableCell className="font-mono">{tx.trxId}</TableCell>
                  <TableCell>
                    <Badge variant={txTypeColors[tx.type]}>{tx.type}</Badge>
                  </TableCell>
                  <TableCell>${tx.amount}</TableCell>
                  <TableCell>${tx.fee}</TableCell>
                  <TableCell>${tx.commission}</TableCell>
                  <TableCell>{tx.initiatedBy}</TableCell>
                  <TableCell>
                    {new Date(tx.createdAt).toLocaleString()}
                  </TableCell>
                  <TableCell>{tx.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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

export default AllTransactions;
