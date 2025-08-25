import TransactionStats from "../../components/modules/Admin/TransactionsStats";
import AllTransactions from "@/components/modules/Admin/AllTransactions";
import UsersStats from "@/components/modules/Admin/UsersStats";

function OverView() {
  return (
    <div>
      <UsersStats></UsersStats>
      <AllTransactions></AllTransactions>
      <TransactionStats></TransactionStats>
    </div>
  );
}

export default OverView;
