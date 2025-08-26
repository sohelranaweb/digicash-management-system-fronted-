// import {
//   Table,
//   TableHeader,
//   TableRow,
//   TableHead,
//   TableCell,
//   TableBody,
// } from "@/components/ui/table";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";
// import { useState } from "react";
// import { useAllTransactionsQuery } from "@/redux/features/admin/admin.api";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// /* All Transaction history  */

// function AllTransactionHistory() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [limit] = useState(5);
//   const { data: trx } = useAllTransactionsQuery({
//     page: currentPage,
//     limit,
//   });
//   console.log("allTrx", trx);

//   const transactions = trx?.data;
//   const totalPage = trx?.meta?.totalPage || 1;
//   console.log("totalPage", totalPage);
//   // Transaction type color mapping
//   const txTypeColors: Record<
//     string,
//     "default" | "secondary" | "destructive" | "outline"
//   > = {
//     ADD_MONEY: "default",
//     SEND_MONEY: "secondary",
//     CASH_OUT: "destructive",
//     CASH_IN: "outline",
//   };
//   return (
//     <div className="">
//       <Card className="shadow-md">
//         <CardHeader>
//           <CardTitle className="text-xl font-bold">
//             Transaction History
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Transaction ID</TableHead>
//                 <TableHead>Type</TableHead>
//                 <TableHead>Amount</TableHead>
//                 <TableHead>Fee</TableHead>
//                 <TableHead>Commission</TableHead>
//                 <TableHead>InitiatedBy</TableHead>
//                 <TableHead>Date</TableHead>
//                 <TableHead>Status</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {transactions?.map((tx: any) => (
//                 <TableRow key={tx.trxId}>
//                   <TableCell className="font-mono">{tx.trxId}</TableCell>
//                   <TableCell>
//                     <Badge variant={txTypeColors[tx.type]}>{tx.type}</Badge>
//                   </TableCell>
//                   <TableCell>${tx.amount}</TableCell>
//                   <TableCell>${tx.fee}</TableCell>
//                   <TableCell>${tx.commission}</TableCell>
//                   <TableCell>{tx.initiatedBy}</TableCell>
//                   <TableCell>
//                     {new Date(tx.createdAt).toLocaleString()}
//                   </TableCell>
//                   <TableCell>{tx.status}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//           {/* Pagination */}
//           {totalPage > 1 && (
//             <div className="flex justify-end mt-4">
//               <div>
//                 <Pagination>
//                   <PaginationContent>
//                     <PaginationItem>
//                       <PaginationPrevious
//                         onClick={() => setCurrentPage((prev) => prev - 1)}
//                         className={
//                           currentPage === 1
//                             ? "pointer-events-none opacity-50"
//                             : "cursor-pointer"
//                         }
//                       />
//                     </PaginationItem>
//                     {Array.from(
//                       { length: totalPage },
//                       (_, index) => index + 1
//                     ).map((page) => (
//                       <PaginationItem
//                         key={page}
//                         onClick={() => setCurrentPage(page)}
//                       >
//                         <PaginationLink isActive={currentPage === page}>
//                           {page}
//                         </PaginationLink>
//                       </PaginationItem>
//                     ))}
//                     <PaginationItem>
//                       <PaginationNext
//                         onClick={() => setCurrentPage((prev) => prev + 1)}
//                         className={
//                           currentPage === totalPage
//                             ? "pointer-events-none opacity-50"
//                             : "cursor-pointer"
//                         }
//                       />
//                     </PaginationItem>
//                   </PaginationContent>
//                 </Pagination>
//               </div>
//             </div>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default AllTransactionHistory;

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
  const [filterType, setFilterType] = useState<string>("all"); // ✅ default "all"

  const { data: trx } = useAllTransactionsQuery({
    page: currentPage,
    limit,
    ...(filterType !== "all" && { type: filterType }), // ✅ only add filter if not "all"
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
        <CardHeader className="flex flex-col sm:flex-row justify-between items-center">
          <CardTitle className="text-xl font-bold">
            Transaction History
          </CardTitle>

          {/* Filter dropdown */}
          <Select
            value={filterType}
            onValueChange={(val) => {
              setFilterType(val);
              setCurrentPage(1);
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem> {/* ✅ no empty value */}
              <SelectItem value="ADD_MONEY">Add Money</SelectItem>
              <SelectItem value="SEND_MONEY">Send Money</SelectItem>
              <SelectItem value="CASH_OUT">Cash Out</SelectItem>
              <SelectItem value="CASH_IN">Cash In</SelectItem>
            </SelectContent>
          </Select>
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
