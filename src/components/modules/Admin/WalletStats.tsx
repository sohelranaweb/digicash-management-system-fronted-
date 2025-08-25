import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useWalletStatsQuery } from "@/redux/features/admin/admin.api";

function WalletStats() {
  const { data: walletStats } = useWalletStatsQuery(undefined);
  console.log("walletStats", walletStats?.data);
  const wallet = walletStats?.data;

  return (
    <div>
      <Card className="shadow-sm rounded-2xl">
        <CardHeader>
          <CardTitle className="text-base font-medium text-gray-700 dark:text-gray-200">
            Wallet Stats
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
            <p>Total Wallets: {wallet?.totalWallets}</p>
            <p>Blocked Wallets: {wallet?.blockedWallets}</p>
            <p>Active Wallets: {wallet?.unblockedWallets}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default WalletStats;
