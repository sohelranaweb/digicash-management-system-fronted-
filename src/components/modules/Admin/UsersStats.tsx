import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCog, Shield } from "lucide-react";

import { useUserStatsQuery } from "@/redux/features/admin/admin.api";
import WalletStats from "./WalletStats";

function UsersStats() {
  const { data: userStats, isLoading } = useUserStatsQuery(undefined);

  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }

  const statsData = userStats?.data?.usersByRole || [];

  if (!Array.isArray(statsData) || statsData.length === 0) {
    return <p className="text-center text-red-500">No data available</p>;
  }

  const stats = statsData.map((item: { _id: string; count: number }) => {
    if (item._id === "USER") {
      return {
        title: "Total Users",
        value: item.count,
        icon: <Users className="h-6 w-6 text-blue-500" />,
        change: "+12.5%",
        color: "bg-blue-100 text-blue-600",
      };
    }
    if (item._id === "AGENT") {
      return {
        title: "Total Agents",
        value: item.count,
        icon: <UserCog className="h-6 w-6 text-green-500" />,
        change: "+8.3%",
        color: "bg-green-100 text-green-600",
      };
    }
    if (item._id === "ADMIN") {
      return {
        title: "Total Admins",
        value: item.count,
        icon: <Shield className="h-6 w-6 text-purple-500" />,
        change: "+2.1%",
        color: "bg-purple-100 text-purple-600",
      };
    }
    return null;
  });

  return (
    <div className="w-1/2 mx-auto grid gap-4 md:grid-cols-3 lg:grid-cols-3 my-10">
      {stats.map(
        (stat, idx) =>
          stat && (
            <Card key={idx} className="rounded-2xl shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.color}`}>
                  {stat.icon}
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          )
      )}
      <WalletStats></WalletStats>
    </div>
  );
}

export default UsersStats;
