import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { Button } from "@/components/ui/button";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useLogoutMutation } from "@/redux/features/wallet/wallet.api";

export default function Profile() {
  const { data, isLoading, error } = useUserInfoQuery(undefined);
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    await logout(undefined);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load profile.</div>;

  const user = data?.data;

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors duration-300">
      <CardHeader className="flex flex-col items-center gap-3">
        {/* Avatar */}
        <Avatar className="h-20 w-20 border-2 border-pink-500">
          {user?.avatarUrl ? (
            <AvatarImage src={user.avatarUrl} alt={user.name} />
          ) : (
            <AvatarFallback className="bg-pink-600 text-white">
              {user?.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          )}
        </Avatar>

        {/* Name + Email */}
        <div className="text-center">
          <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">
            {user?.name}
          </CardTitle>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {user?.email}
          </p>
        </div>

        {/* Role Badge */}
        <Badge
          variant="outline"
          className="uppercase px-3 py-1 text-xs font-semibold border-pink-500 text-pink-600 dark:text-pink-400 dark:border-pink-400"
        >
          {user?.role}
        </Badge>
      </CardHeader>

      <Separator className="dark:bg-gray-700" />

      <CardContent className="flex justify-between px-6 py-4">
        {/* Status */}
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Status
          </span>
          <Badge
            className={`mt-1 ${
              user?.isActive === "ACTIVE"
                ? "bg-green-500 hover:bg-green-600 text-white"
                : "bg-red-500 hover:bg-red-600 text-white"
            }`}
          >
            {user?.isActive === "ACTIVE" ? "Active" : "Inactive"}
          </Badge>
        </div>

        {/* Wallet */}
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Wallet
          </span>
          <Badge className="mt-1 bg-pink-600 hover:bg-pink-700 text-white dark:bg-pink-500 dark:hover:bg-pink-600">
            View
          </Badge>
        </div>
      </CardContent>

      {/* Actions */}
      <div className="flex justify-center gap-4 px-6 py-4">
        <Button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white"
        >
          Logout
        </Button>
      </div>
    </Card>
  );
}
