import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
import { Badge } from "@/components/ui/badge";
import { useGetMyWalletAndTrxQuery } from "@/redux/features/wallet/wallet.api";

function AgentWalletTrx() {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(5);

  const { data: walletInfo } = useGetMyWalletAndTrxQuery({
    page: currentPage,
    limit,
  });

  const { wallet, transactions } = walletInfo?.data || {};
  const totalPage = walletInfo?.meta?.totalPage || 1;

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
    <div>
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        {/* Wallet Info */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold">
              Wallet Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-lg">
              Balance:{" "}
              <span className="font-semibold text-green-600 dark:text-green-400">
                ${wallet?.balance}
              </span>
            </p>
            <p>
              Status:{" "}
              {wallet?.isBlocked ? (
                <Badge variant="destructive">Blocked</Badge>
              ) : (
                <Badge variant="outline">Active</Badge>
              )}
            </p>
          </CardContent>
        </Card>

        {/* Transactions Table */}
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
                  <TableHead>Commission</TableHead>
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
                    <TableCell>
                      {tx.commission ? `$${tx.commission}` : "-"}{" "}
                    </TableCell>
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
    </div>
  );
}

export default AgentWalletTrx;

// import { useState } from "react";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
// import { Badge } from "@/components/ui/badge";
// import { useGetMyWalletAndTrxQuery } from "@/redux/features/wallet/wallet.api";

// function AgentWalletTrx() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [limit] = useState(5);

//   const { data: walletInfo } = useGetMyWalletAndTrxQuery({
//     page: currentPage,
//     limit,
//   });

//   const { wallet, transactions } = walletInfo?.data || {};
//   const totalPage = walletInfo?.meta?.totalPage || 1;

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
//     <div>
//       <div className="max-w-5xl mx-auto p-6 space-y-6">
//         {/* Wallet Info */}
//         <Card className="shadow-md">
//           <CardHeader>
//             <CardTitle className="text-xl font-bold">
//               Wallet Information
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-2">
//             <p className="text-lg">
//               Balance:{" "}
//               <span className="font-semibold text-green-600 dark:text-green-400">
//                 ${wallet?.balance}
//               </span>
//             </p>
//             <p>
//               Status:{" "}
//               {wallet?.isBlocked ? (
//                 <Badge variant="destructive">Blocked</Badge>
//               ) : (
//                 <Badge variant="outline">Active</Badge>
//               )}
//             </p>
//           </CardContent>
//         </Card>

//         {/* Transactions Table */}
//         <Card className="shadow-md">
//           <CardHeader>
//             <CardTitle className="text-xl font-bold">
//               Transaction History
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Transaction ID</TableHead>
//                   <TableHead>Type</TableHead>
//                   <TableHead>Amount</TableHead>
//                   <TableHead>Commission</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {transactions?.map((tx: any) => (
//                   <TableRow key={tx.trxId}>
//                     <TableCell className="font-mono">{tx.trxId}</TableCell>
//                     <TableCell>
//                       <Badge variant={txTypeColors[tx.type] || "default"}>
//                         {tx.type}
//                       </Badge>
//                     </TableCell>
//                     <TableCell>${tx.amount}</TableCell>
//                     <TableCell>
//                       {tx.commission ? `$${tx.commission}` : "-"}
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>

//             {/* Pagination */}
//             {totalPage > 1 && (
//               <div className="flex justify-end mt-4">
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
//             )}
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }

// export default AgentWalletTrx;
