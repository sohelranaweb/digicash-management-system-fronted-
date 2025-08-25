import { AgentUpdateProfileModal } from "@/components/modules/Agent/AgentUpdateProfileModal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  authApi,
  useLogoutMutation,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";
import {
  Smartphone,
  HandCoins,
  ShoppingBag,
  Lightbulb,
  PiggyBank,
  Handshake,
} from "lucide-react";
import { Link } from "react-router";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { ChangePasswordModal } from "@/components/modules/User/ChangePasswordModal";

export default function AgentProfile() {
  const { data, isLoading, error } = useUserInfoQuery(undefined);
  const dispatch = useAppDispatch();
  const [logout] = useLogoutMutation();

  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await logout(undefined);
    dispatch(authApi.util.resetApiState());
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load profile.</div>;

  const user = data?.data;
  console.log("user Info", user);

  return (
    <div
      className="w-full max-w-xl mx-auto shadow-lg rounded-2xl border overflow-hidden transition-colors duration-300"
      style={{
        background: "var(--card)",
        color: "var(--card-foreground)",
        borderColor: "var(--border)",
      }}
    >
      {/* Header Section */}
      <div
        className="p-5 flex items-center gap-4 cursor-pointer"
        style={{
          background: "var(--primary)",
          color: "var(--primary-foreground)",
        }}
        onClick={() => setOpen(true)}
      >
        <Avatar className="h-14 w-14 border-2 border-white">
          {user?.avatarUrl ? (
            <AvatarImage src={user.avatarUrl} alt={user.name} />
          ) : (
            <AvatarFallback
              style={{
                background: "var(--accent)",
                color: "var(--accent-foreground)",
              }}
            >
              {user?.name?.charAt(0).toUpperCase()}
            </AvatarFallback>
          )}
        </Avatar>
        <div className="flex-1">
          <h2 className="text-lg font-bold">{user?.name}</h2>
          <Button
            variant="secondary"
            className="px-3 py-1 text-sm rounded-full mt-1"
            style={{
              background: "var(--background)",
              color: "var(--primary)",
              border: "1px solid var(--border)",
            }}
          >
            {user?.wallet?.balance}
          </Button>
        </div>
      </div>

      {/* Profile Details Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Profile Details</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 text-sm">
            <p>
              <strong>Name:</strong> {user?.name}
            </p>
            <p>
              <strong>Email:</strong> {user?.email}
            </p>
            <p>
              <strong>Phone:</strong> {user?.phone}
            </p>
            <p>
              <strong>Role:</strong> {user?.role}
            </p>
            <p>
              <strong>Status:</strong> {user?.isActive}
            </p>
            <p>
              <strong>Address:</strong> {user?.address}
            </p>
            <p>
              <strong>Wallet Balance:</strong> {user?.wallet?.balance}
            </p>
            <p>
              <strong>Agent Approval:</strong> {user?.agentApprovalStatus}
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Features Grid */}
      <div className="grid grid-cols-4 gap-6 p-6">
        <Link to="/agent/cashIn" className="flex flex-col items-center">
          <div className="p-3 rounded-xl mb-2 bg-muted">
            <HandCoins className="h-6 w-6 text-purple-500" />
          </div>
          <span className="text-xs">Cash In</span>
        </Link>
        <div className="flex flex-col items-center">
          <div className="p-3 rounded-xl mb-2 bg-muted">
            <Smartphone className="h-6 w-6 text-purple-500" />
          </div>
          <span className="text-xs">Recharge</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-3 rounded-xl mb-2 bg-muted">
            <ShoppingBag className="h-6 w-6 text-purple-500" />
          </div>
          <span className="text-xs">Payment</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-3 rounded-xl mb-2 bg-muted">
            <Lightbulb className="h-6 w-6 text-gray-500" />
          </div>
          <span className="text-xs">পে বিল</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-3 rounded-xl mb-2 bg-muted">
            <PiggyBank className="h-6 w-6 text-pink-500" />
          </div>
          <span className="text-xs">সেভিংস</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-3 rounded-xl mb-2 bg-muted">
            <Handshake className="h-6 w-6 text-amber-700" />
          </div>
          <span className="text-xs">লোন</span>
        </div>
      </div>

      {/* Update profiel  */}
      <div className="px-10 py-6 flex space-x-6">
        <Button asChild>
          <AgentUpdateProfileModal userId={user?._id}></AgentUpdateProfileModal>
        </Button>
        <Button asChild>
          <ChangePasswordModal></ChangePasswordModal>
        </Button>
      </div>

      {/* Logout Button */}
      <div className="p-4 flex justify-center">
        <Button onClick={handleLogout} className="w-full">
          Logout
        </Button>
      </div>
    </div>
  );
}
