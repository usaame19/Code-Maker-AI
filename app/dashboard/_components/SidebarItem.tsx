"use client";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface SidebarItemProp {
  id: number;
  icon: LucideIcon;
  label: string;
  href: string;
  isShare: boolean;
}
const SidebarItem = ({ id, icon: Icon, label, href }: SidebarItemProp) => {
  const pathName = usePathname();
  const router = useRouter();

  const isActive = pathName.includes(href);
  return (
    <div>
      <button
      onClick={()=>router.push(`/${href}`)}
        className={cn(
          "flex w-full items-center gap-x-2 text-slate-500 font-[500] pl-6 transition-all hover:bg-slate-50 hover:text-slate-600 text-md",
          isActive && "text-slate-600 bg-slate-100"
        )}
      >
        <div className="flex items-center gap-x-2 py-4">
          <Icon size={23} />
          {label}
        </div>
        <div className={cn('ml-auto opacity-0 border-2 border-slate-700 h-[56px] transition-all', isActive && "opacity-1")}>

            </div>
      </button>
    </div>
  );
};

export default SidebarItem;
