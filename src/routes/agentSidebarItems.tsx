import AgentProfile from "@/pages/Agent/AgentProfile";
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
    ],
  },
];
