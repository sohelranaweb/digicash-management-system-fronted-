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
import { useManageUsersQuery } from "@/redux/features/admin/admin.api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { useManageBlockMutation } from "@/redux/features/wallet/wallet.api";
import { useAprovedAgentMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";

function ManageUsers() {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(5);

  const { data: usersData } = useManageUsersQuery({
    page: currentPage,
    limit,
  });

  const [manageBlock] = useManageBlockMutation();
  const [approveAgent] = useAprovedAgentMutation();

  const allUsers = usersData?.data;
  const totalPage = usersData?.meta?.totalPage || 1;
  const handleApproveAgent = async (userId: string) => {
    try {
      await approveAgent({
        userId,
        body: { agentApprovalStatus: "APPROVED" },
      }).unwrap();
      toast.success("Agent approved successfully!");
    } catch (err: any) {
      toast.error(err.data?.message || "Failed to approve agent");
    }
  };
  const handleBlockToggle = async (walletId: string, isBlocked: boolean) => {
    try {
      if (!isBlocked) {
        toast("Wallet is already active", { icon: "⚠️" });
        return;
      }

      await manageBlock({
        walletId,
        body: { isBlocked: !isBlocked },
      }).unwrap();

      toast.success("Wallet unblocked successfully!");
    } catch (err: any) {
      toast.error(err.data?.message || "Failed to update wallet status");
    }
  };
  return (
    <div>
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-bold">All Users History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Wallet</TableHead>
                <TableHead>Unblock</TableHead>
                <TableHead>Aprroved Agent</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allUsers?.map((user: any) => (
                <TableRow key={user._id}>
                  <TableCell className="font-mono">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell className="flex flex-col gap-1">
                    <Badge
                      className={
                        user.wallet.isBlocked
                          ? "bg-red-500 text-white hover:bg-red-600"
                          : "bg-green-500 text-white hover:bg-green-600"
                      }
                    >
                      {user.wallet.isBlocked ? "Blocked" : "Active"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      onClick={() =>
                        handleBlockToggle(
                          user.wallet._id,
                          user.wallet.isBlocked
                        )
                      }
                    >
                      {user.wallet.isBlocked ? "Unblock" : "Block"}
                    </Button>
                  </TableCell>
                  <TableCell>
                    {user.role === "AGENT" ? (
                      user.agentApprovalStatus === "PENDING" ? (
                        <Button
                          variant="outline"
                          onClick={() => handleApproveAgent(user._id)}
                        >
                          Pending
                        </Button>
                      ) : (
                        <Button variant="outline" disabled>
                          Approved
                        </Button>
                      )
                    ) : null}
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
  );
}

export default ManageUsers;
