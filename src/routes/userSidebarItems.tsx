import Profile from "@/pages/User/Profile";
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
    ],
  },
];
