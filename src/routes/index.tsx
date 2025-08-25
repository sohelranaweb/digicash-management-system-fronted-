import App from "@/App";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Faq from "@/pages/Faq";
import Features from "@/pages/Features";
import Hompage from "@/pages/Hompage";
import Login from "@/pages/Login";
import Pricing from "@/pages/Pricing";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import { generateRoutes } from "@/utils/generateRoutes";
import { withAuth } from "@/utils/withAuth";
import { createBrowserRouter, Navigate } from "react-router";
import { userSidebarItems } from "./userSidebarItems";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { role } from "@/constants/role";
import type { TRole } from "@/types";
import { adminSidebarItems } from "./adminSidebarItems";
import { agentSidebarItems } from "./agentSidebarItems";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Hompage,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/features",
        Component: Features,
      },
      {
        path: "/pricing",
        Component: Pricing,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/faq",
        Component: Faq,
      },
    ],
  },
  {
    path: "/admin",
    Component: withAuth(DashboardLayout, role.admin as TRole),
    children: [
      { index: true, element: <Navigate to="/admin/overview"></Navigate> },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    path: "/user",
    Component: withAuth(DashboardLayout, role.user as TRole),
    children: [
      { index: true, element: <Navigate to="/user/me"></Navigate> },
      ...generateRoutes(userSidebarItems),
    ],
  },
  {
    path: "/agent",
    Component: withAuth(DashboardLayout, role.agent as TRole),
    children: [
      { index: true, element: <Navigate to="/agent/me"></Navigate> },
      ...generateRoutes(agentSidebarItems),
    ],
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
  {
    Component: Verify,
    path: "/verify",
  },
]);
