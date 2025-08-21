import { role } from "@/constants/role";
import { adminSidebarItems } from "@/routes/adminSidebarItems";
import { userSidebarItems } from "@/routes/userSidebarItems";
import type { TRole } from "../types";
import { agentSidebarItems } from "@/routes/agentSidebarItems";

export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.admin:
      return [...adminSidebarItems];
    case role.agent:
      return [...agentSidebarItems];
    case role.user:
      return [...userSidebarItems];
    default:
      return [];
  }
};
