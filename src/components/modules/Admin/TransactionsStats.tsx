import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTransactionsStatsQuery } from "@/redux/features/admin/admin.api";
import TotalTrxAmount from "./TotalTrxAmount";

interface SummaryItem {
  totalCount: number;
  totalAmountOverall: number;
  totalCommissionOverall: number;
  totalFeeOverall: number;
  counts: Record<string, number>;
}

export default function TransactionStats() {
  const { data: trxStats, isLoading } = useTransactionsStatsQuery(undefined);

  const transactionSummary: Record<string, SummaryItem> | undefined =
    trxStats?.data?.summary;

  if (isLoading) {
    return <p className="text-center text-gray-500">Loading stats...</p>;
  }

  if (!transactionSummary) {
    return <p className="text-center text-red-500">No stats available</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {/* TransactionStats cards - ৪টি */}
      {Object.entries(transactionSummary).map(([key, stats]) => (
        <Card key={key} className="shadow-sm rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base font-medium text-gray-700 dark:text-gray-200">
              {key.replace("_", " ")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>
              Count:{" "}
              <span className="text-2xl font-bold">{stats.totalCount}</span>
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
              <p>Total Amount: ৳{stats.totalAmountOverall}</p>
              <p>Commission: ৳{stats.totalCommissionOverall}</p>
              <p>Fees: ৳{stats.totalFeeOverall}</p>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* TotalTrxAmount card - ১টি */}
      <TotalTrxAmount />
    </div>
  );
}
