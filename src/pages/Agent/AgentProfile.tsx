import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  useLogoutMutation,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";
import {
  Send,
  Smartphone,
  HandCoins,
  ShoppingBag,
  PlusCircle,
  Lightbulb,
  PiggyBank,
  Handshake,
} from "lucide-react";
import { Link } from "react-router";

export default function AgentProfile() {
  const { data, isLoading, error } = useUserInfoQuery(undefined);
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    await logout(undefined);
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
        className="p-5 flex items-center gap-4"
        style={{
          background: "var(--primary)",
          color: "var(--primary-foreground)",
        }}
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

      {/* Features Grid */}
      <div className="grid grid-cols-4 gap-6 p-6">
        <Link to="/user/cashOut" className="flex flex-col items-center">
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

      {/* Logout Button */}
      <div className="p-4 flex justify-center">
        <Button onClick={handleLogout} className="w-full">
          Logout
        </Button>
      </div>
    </div>
  );
}
