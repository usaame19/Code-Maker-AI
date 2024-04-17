'use client'
import { BookAIcon, ViewIcon } from "lucide-react";
import React from "react";
import SidebarItem from "./SidebarItem";

const adminRoutes = [
  {
    id: 1,
    icon: ViewIcon,
    label: "Design a Code ",
    href: "dashboard/user/design",
    isShare: true,
  },
  {
    id: 2,
    icon: ViewIcon,
    label: "list ",
    href: "dashboard/user",
    isShare: true,
  },
  {
    id: 3,
    icon: ViewIcon,
    label: "Dashboard ",
    href: "dashboard/admin",
    isShare: false,
  },
];
const userRoutes = [
  {
    id: 1,
    icon: ViewIcon,
    label: "Design a Code ",
    href: "dashboard/user/design",
    isShare: true,
  },
  {
    id: 2,
    icon: BookAIcon,
    label: "list ",
    href: "dashboard/user",
    isShare: true,
  },
];
const SidebarRoutes = ({ role }: { role: string }) => {
  const routes = role == "admin" ? adminRoutes : userRoutes;
  return <div className="flex flex-col w-full ">
    {routes.map((route)=>(
        <SidebarItem 
        id={route.id}
        icon={route.icon}
        label={route.label}
        href={route.href}
        isShare={route.isShare}
        key= {route.id}
         />
    ))}
  </div>;
};

export default SidebarRoutes;
