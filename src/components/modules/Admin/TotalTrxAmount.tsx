import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTransactionsStatsQuery } from "@/redux/features/admin/admin.api";

function TotalTrxAmount() {
  const { data: trxStats, isLoading } = useTransactionsStatsQuery(undefined);
  console.log("trxAmount", trxStats);
  if (isLoading) {
    return <p className="text-center text-gray-500">Loading stats Amount...</p>;
  }
  return (
    <div>
      <Card className="shadow-sm rounded-2xl">
        <CardHeader>
          <CardTitle className="text-base font-medium text-gray-700 dark:text-gray-200">
            Total Transaction Amount
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
            <p>
              totalTrxAmount: {trxStats?.data?.totalPlatformTransactionAmount}
            </p>
            <p>totalAdminEarn: {trxStats?.data?.totalAdminIncome}</p>
            <p>totalAgentCommission: {trxStats?.data?.totalAgentCommission}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default TotalTrxAmount;
