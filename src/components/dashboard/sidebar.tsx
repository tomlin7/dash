"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import { dashboardNavLinks } from "@/lib/constants";

export default function DashboardSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "bg-card border-r border-border h-screen overflow-auto flex flex-col transition-all duration-300",
        collapsed ? "w-[70px]" : "w-[240px]"
      )}
    >
      <div className="py-4 px-3 flex items-center justify-between border-b border-border">
        <Link
          href="/"
          className={cn("flex items-center", collapsed && "justify-center")}
        >
          <LayoutDashboard className="h-6 w-6 text-primary" />
          {!collapsed && (
            <span className="ml-2 text-lg font-semibold">Dash</span>
          )}
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="h-8 w-8"
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </Button>
      </div>

      <div className="flex-1 py-4">
        <nav className="space-y-1 px-2">
          {dashboardNavLinks.map((item) => {
            const IconComponent = LucideIcons[
              item.icon as keyof typeof LucideIcons
            ] as LucideIcon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors relative",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute left-0 w-1 h-full bg-primary rounded-r-full"
                    transition={{ duration: 0.2 }}
                  />
                )}
                {IconComponent && (
                  <IconComponent className="h-5 w-5 mr-2 flex-shrink-0" />
                )}
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-border">
        <div className={cn("flex items-center", collapsed && "justify-center")}>
          {!collapsed && (
            <div className="flex-1 flex flex-col overflow-hidden">
              <p className="flex-sm font-medium truncate">Dash</p>
              <p className="text-xs text-muted-foreground truncate">v1.0.0</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
