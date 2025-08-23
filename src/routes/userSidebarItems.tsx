import CashOut from "@/pages/User/CashOut";
import Profile from "@/pages/User/Profile";
import SendMoney from "@/pages/User/SendMoney";
import TopUp from "@/pages/User/TopUp";
import WalletTrx from "@/pages/User/WalletTrx";
import type { ISidebarItem } from "@/types";

export const userSidebarItems: ISidebarItem[] = [
  {
    title: "History",
    items: [
      {
        title: "Profile",
        url: "/user/me",
        component: Profile,
      },

      {
        title: "Top Up",
        url: "/user/topup",
        component: TopUp,
      },
      {
        title: "Send Money",
        url: "/user/sendMoney",
        component: SendMoney,
      },
      {
        title: "Cash Out",
        url: "/user/cashOut",
        component: CashOut,
      },
      {
        title: "Wallet & Transactions",
        url: "/user/walletTrx",
        component: WalletTrx,
      },
    ],
  },
];
