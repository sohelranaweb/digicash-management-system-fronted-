import type { ISidebarItem } from "@/types";

import { lazy } from "react";

const OverView = lazy(() => import("@/pages/Admin/OverView"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "OverView",
        url: "/admin/overView",
        component: OverView,
      },
    ],
  },
];
