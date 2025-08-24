import AgentProfile from "@/pages/Agent/AgentProfile";
import AgentWalletTrx from "@/pages/Agent/AgentWalletTrx";
import CashIn from "@/pages/Agent/CashIn";
import type { ISidebarItem } from "@/types";

export const agentSidebarItems: ISidebarItem[] = [
  {
    title: "Agent History",
    items: [
      {
        title: "Profile",
        url: "/agent/me",
        component: AgentProfile,
      },
      {
        title: "Cash In",
        url: "/agent/cashIn",
        component: CashIn,
      },
      {
        title: "Wallet & Trx",
        url: "/agent/walletTrx",
        component: AgentWalletTrx,
      },
    ],
  },
];
